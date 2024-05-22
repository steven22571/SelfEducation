from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages 
from django.http import HttpResponse
import  django.contrib.auth as DjangoAuth
from django.contrib.auth.decorators import login_required
from django.contrib.auth import update_session_auth_hash  
from django.template.loader import render_to_string
from django.conf import settings
from django.http import QueryDict
from .forms import RegistrationForm, AuthForm, OurPasswordChangeForm, ForgotPassword, DocumentsForm, ConfigurationForm1, ConfigurationForm2, ListConfigurationForm1, ListConfigurationForm2, OurPasswordChangeForm2, FeedBackForm
from .models import Users, ImmunityGeneralStatistic, Company, ImmunityTypeStatistic, SiteRecommendation, SiteVerificationListItem, SiteVerification, EmailNotificationListItem, EmailNotification, Country, SiteRecommendation, PasswordResets
import numpy as np
import requests
from bs4 import BeautifulSoup
import datetime
from io import StringIO
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from .models import SiteThreatStatistic
import json
import string
import random

global SMARTCAPTCHA_SERVER_KEY
SMARTCAPTCHA_SERVER_KEY = "ZJ8vfa7azUX3PF1nbHumGwGB6Mc2mSmfP6OF6mpK"

global siteURL
siteURL = "https://lk2.vulndetector.ru/"

############
### DONE ###
############
def check_captcha(token):
    resp = requests.get(
        "https://smartcaptcha.yandexcloud.net/validate",
        {
            "secret": SMARTCAPTCHA_SERVER_KEY,
            "token": token,
            "ip": "<IP-адрес_пользователя>"  # Способ получения IP-адреса зависит от вашего фреймворка и прокси.                                   
                                             # Например, в Flask это может быть request.remote_addr
        },
        timeout=1
    )
    server_output = resp.content.decode()
    if resp.status_code != 200:
        print(f"Allow access due to an error: code={resp.status_code}; message={server_output}")
        return True
    return json.loads(server_output)["status"] == "ok"

############
### DONE ###
############
def generate_random_string(length):
    # Get all the ASCII letters in lowercase and uppercase
    letters = string.ascii_letters
    # Randomly choose characters from letters for the given length of the string
    random_string = ''.join(random.choice(letters) for i in range(length))
    return random_string

############
### DONE ###
############
def register(request):
    error_message = None
    login_value = ''
    password_value = ''
    if request.method == 'POST':
        data = request.POST.copy()
        data["password1"] = data["password"]
        data["password2"] = data["password"]
        form = RegistrationForm(data=data)
        if form.is_valid():
            form.save()
            username = request.POST["login"]
            pwd = request.POST["password"]
            token = request.POST["smart-token"]
            if check_captcha(token):
                access_url = generate_random_string(25)
                access_url = siteURL+"auth/emailAuth/"+access_url
                #print(generate_random_string)
                usr = Users.objects.get(login=username)
                usr.remember_token = access_url
                usr.save()
                email = usr.email
                msg_plain = render_to_string('Auth_email.txt', {"login":username, 'AuthURL':access_url})#, {'some_params': some_params})
                msg_html = render_to_string('Auth_email.html', {"login":username, 'AuthURL':access_url})#, {'some_params': some_params}) 
                send_mail('Проверка Email', msg_plain, settings.EMAIL_HOST_USER, [email], html_message=msg_html)
                    #error_message = "Неверный логин или пароль"
            else:
                return redirect('register/')
    else:
        form = RegistrationForm()
    context = { 
        'form':form,
        'login_value': login_value,  
        'password_value': password_value,  
        'error_message': error_message
    }  
    return render(request, 'register.html', context)

############
### DONE ###
############
def auth_backend(request, authURL):
        token = authURL[-25:]
        user = Users.objects.get(remember_token=siteURL+"auth/emailAuth/"+authURL)
        user.email_verified_at = datetime.datetime.now()
        user.save()
        if user is not None: 
            DjangoAuth.login(request, user)
            EmNotif = EmailNotification(period = "day", user_id=user.id, created_at=datetime.datetime.now(), updated_at=datetime.datetime.now())
            EmNotif.save()
            emList = EmailNotificationListItem(value=user.email, email_list_id=EmNotif.id, created_at=datetime.datetime.now(), updated_at=datetime.datetime.now(), user_id=user.id)
            emList.save()
            return redirect('/dashboard/status/')
        

#####################
### Future sprint ###
#####################
def more_details(request):    
    if request.method == 'POST':
        user_id = request.POST.get("user_id")
        ip = request.POST.get("ip")
        hostname = request.POST.get("hostname")
        cve_bdu_cnvd = request.POST.get("cve_bdu_cnvd")
        risk = request.POST.get("risk")
        if user_id:
            if SiteThreatStatistic.objects.filter(userid=user_id).exists():
                context = {'user_id': user_id}
        elif ip:
            if SiteThreatStatistic.objects.filter(ip=ip).exists():
                context = {'ip': ip}
        elif hostname:
            if SiteThreatStatistic.objects.filter(hostname=hostname).exists():
                context = {'hostname': hostname}
        elif cve_bdu_cnvd:
            if SiteThreatStatistic.objects.filter(cve_bdu_cnvd=cve_bdu_cnvd).exists():
                context = {'cve_bdu_cnvd': cve_bdu_cnvd}
        elif risk:
            if SiteThreatStatistic.objects.filter(risk=risk).exists():
                context = {'risk': risk}
        return render(request, 'recomendation.html', context) 
    
    else:
        return render(request, 'recomendation.html', {}) 
    
############
### DONE ###
############
def ForgotPasswordView(request):
    if request.method == 'POST':
        form = ForgotPassword(request.POST)
        username = request.POST["email"]
        #pwd = request.POST["password"]
        try:
            user = Users.objects.get(email=request.POST["email"])
            if user is not None: #if AuthenticationForm.confirm_login_allowed():
                token = request.POST["smart-token"]
                if check_captcha(token):   
                    access_url = generate_random_string(25)
                    access_url = siteURL+"auth/passwordreset/"+access_url 
                    PasswordResets.objects.create(email=request.POST["email"], token=access_url, created_at=datetime.datetime.now(datetime.timezone.utc))
                    msg_plain = render_to_string('email.txt', {'login': user.login, 'link':access_url})
                    msg_html = render_to_string('email.html', {'login': user.login, 'link':access_url}) 
                    send_mail('Запрос на изменение пароля', msg_plain, settings.EMAIL_HOST_USER, [request.POST["email"]], html_message=msg_html)
                    return redirect('/login/')
                else:
                    return redirect("auth/password-remind/")
        except:
                return redirect('/login/')
    else:
        form = ForgotPassword()
    context = { 
        'form':form 
    } 
    return render(request, 'ForgotPassword.html', context)

############
### DONE ###
############
def pwd_remind_backend(request, pwd_remindURL):
        token = pwd_remindURL[-25:]
        print(siteURL+"auth/passwordreset/"+pwd_remindURL)
        email = PasswordResets.objects.get(token=siteURL+"auth/passwordreset/"+pwd_remindURL).email
        date = PasswordResets.objects.get(token=siteURL+"auth/passwordreset/"+pwd_remindURL).created_at
        delta = datetime.datetime.now(datetime.timezone.utc) - date
        if delta < datetime.timedelta(hours=1):
            user = Users.objects.get(email=email)
            print("delta OK")
            if user is not None: 
                print(user)
                if request.method == 'POST':
                    data = request.POST.copy()
                    form = OurPasswordChangeForm2(user, data=data)
                    if form.is_valid():
                        form.save()
                        #user =
                        messages.success(request,
                                         'Ваш пароль успешно обновлен!',
                                         extra_tags='alert-success')
                        password_reset = PasswordResets.objects.get(token=siteURL+"auth/passwordreset/"+pwd_remindURL)
                        print(password_reset)
                        password_reset.created_at = password_reset.created_at - datetime.timedelta(hours=1)
                        password_reset.save()
                        return redirect("/login")
                    else:
                        messages.error(request, 'Пароли, которые вы ввели не совпадают.', extra_tags='alert-danger')
                    context = {'form': form}
                else:
                    form = OurPasswordChangeForm2(user)               
                    context = {'form': form}
            return render(request, 'Password_Remind.html', context)
        else:
            return redirect("/login")

############
### DONE ###
############
def login(request): 
    error_message = None
    login_value = ''
    password_value = ''
    if request.method == 'POST':
        form = AuthForm(request.POST)
        print(form.errors)
        username = request.POST["login"]
        pwd = request.POST["password"]
        
        token = request.POST["smart-token"]  # Например, request.form["smart-token"]
        if check_captcha(token):
            user = DjangoAuth.authenticate(request, username=username, password=pwd)
            if (user is not None):
                if Users.objects.get(login=request.POST["login"]).email_verified_at!=None: 
                    DjangoAuth.login(request, user)
                    return redirect('/dashboard/status/')
            else:
                login_value = username  
                password_value = pwd  
                error_message = "Неверный логин или пароль"
        else:
           return redirect("/login")
    else:
        form = AuthForm()
    context = { 
        'form':form,
       'login_value': login_value,  
       'password_value': password_value,  
       'error_message': error_message

    } 
    return render(request, 'login.html', context) 

############
### DONE ###
############
@login_required(redirect_field_name='/login')
def home(request):
    if request == '/dashboard/advanced':
        redirect("/home")
    else:
        return redirect('/login')
    return redirect('/dashboard/status/')
def load_content(request, content_name):
    return HttpResponse("Содержимое для " + content_name)

#####################
### Future sprint ###
#####################
def get_exploits_by_cve(request, cve):
    print(request.POST)
    url = f"https://www.exploit-db.com/search?cve={cve}"  
    headers = {"User-Agent":request.headers["User-Agent"]}
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  
        soup = BeautifulSoup(response.text, 'html.parser')
        exploits = [h3.text.strip() for h3 in soup.find_all('h3', class_='card-title')]
        print(exploits)
        return render(request, 'home2.html', {"task":request.path, "mail":request.user.email, "exploits":exploits})
    except Exception as e:
        print(f"Ошибка при запросе к Exploit Database: {e}")
        return render(request, 'home2.html', {"task":request.path, "mail":request.user.email, "exploits": "Ничего не найдено"})
    
############
### DONE ###
############
def schedule_1(request): 
    data = ImmunityTypeStatistic.objects.filter(user=str(request.user.id))
    n1 = len(data)
    n = len(data)
    if n<3:
        n=60
    fig = plt.figure(figsize=(100,100))
    radiuses = [10,20,30,40,50,60,70,80,90,100,120]
    for radius in radiuses:
        angles = np.linspace(0, 2*np.pi, n, endpoint=False)
        if n % 2 != 0:
            angles += 1.5*np.pi / n
            if n==5:
                angles += 1*np.pi / n
        elif n%4==0:
            angles += 2*np.pi / n
        else:
            angles += 1*np.pi / n
        x = np.cos(angles)
        y = np.sin(angles)
        if n % 2 != 0:
            x = -x
        x = np.append(x*radius, x[0]*radius)
        y = np.append(y*radius, y[0]*radius)
        if radius!=radiuses[-1]:
            plt.plot(x, y, color='grey', linewidth=0.9)
        else:
            plt.plot(x, y, color='grey', linewidth=0)
        plt.axis('equal')
        center = (0, 0)
        ax = plt.gca()
        xaxis = ax.get_xaxis()
        xaxis.set_visible(False)
        ax.spines['left'].set_position('center')
        ax.spines['left'].set_visible('true')
        ax.spines['bottom'].set_visible(False)
        ax.spines['top'].set_visible(False)
        ax.spines['right'].set_visible(False) 
        plt.axhline(0, color='black', linewidth=0.5).set_visible(False)
        plt.axvline(0, color='black', linewidth=0.5).set_visible(False)
        plt.title('ИТ периметр организации')
        plt.axis('equal')
        plt.yticks(radiuses[:-1])
        plt.rcParams.update({'font.size': 7})
        ax.tick_params(axis=u'both', which=u'both',length=0)
    plt.axis('off')
    for i in range(len(radiuses[:-1])):
        plt.text(0, radiuses[i]+1.5, radiuses[i], horizontalalignment='center', verticalalignment='center')
    if n1<3:
        n=0
    if n!=0:        
        angles = np.linspace(0, 2*np.pi, n, endpoint=False)
        if n % 2 != 0:
            angles += 1.5*np.pi / n
            if n==5:
                angles += 1*np.pi / n
        elif n%4==0:
                angles += 2*np.pi / n
        else:
            angles += 1*np.pi / n
        values = [i.statistic for i in data]
        num_vertices = len(values)
        x_polygon = [r * np.cos(theta) for r, theta in zip(values, angles)]
        y_polygon = [r * np.sin(theta) for r, theta in zip(values, angles)]
        plt.plot(x_polygon + [x_polygon[0]], y_polygon + [y_polygon[0]], 'green')
        angles = np.linspace(0, 2*np.pi, n, endpoint=False)
        if n % 2 != 0:
            angles += 1.5*np.pi / n
            if n==5:
                angles += 1*np.pi / n
        elif n%4==0:
                angles += 2*np.pi / n
        else:
            angles += 1*np.pi / n
        values = [120 for i in data]
        num_vertices = len(values)
        x_polygon = [r * np.cos(theta) for r, theta in zip(values, angles)]
        y_polygon = [r * np.sin(theta) for r, theta in zip(values, angles)]
        for i in range(n):
            plt.text(x_polygon[i], y_polygon[i], data[i].type, horizontalalignment='center', verticalalignment='center')   
    imgdata = StringIO()
    fig.set_size_inches(5, 5, forward=True) 
    before = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="432pt" height="432pt" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg" version="1.1">'
    after = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 359.40924 188.297568" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Graph2">'
    fig.savefig(imgdata, format='svg')
    imgdata.seek(0)
    data = imgdata.getvalue().replace(before, after, 1)
    plt.close()
    return data

############
### DONE ###
############
def schedule(request): 
    data = {i.created_at:i.statistic for i in ImmunityGeneralStatistic.objects.filter(user=str(request.user.id))}
    keys = sorted(data.keys(), reverse=False)
    data2 = {}
    for i in keys:
        v = i
        v = str(v)
        data2[v]=data[i]
    fig = plt.figure()
    ax = fig.add_subplot(1,1,1)
    ax.set_axisbelow(b=True)
    ax.yaxis.grid(color='#DFDFDF')
    ax.set_yticks(np.arange(0, 101, 10))
    x = [i.split(" ")[0] for i in data2.keys()] 
    y = data2.values()
    colors = []
    for i in y:
        if i>=80:
            colors.append('#fe6763')
        else:
            colors.append('#33cdfa')
    plt.axhline (y=100, visible = 0)
    plt.axhline (y=80, color='red') 
    if data2=={}:
        plt.xlim(0,100)
        plt.ylim(0,100)
    plt.bar(x, y, color=colors)
    plt.title('')
    plt.xlabel('')
    imgdata = StringIO()
    fig.set_size_inches( 4.991795, 2.615244, forward=True)  
    before = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="359.40924pt" height="188.297568pt" viewBox="0 0 359.40924 188.297568" xmlns="http://www.w3.org/2000/svg" version="1.1">'
    after = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 359.40924 188.297568" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Graph2">'
    fig.savefig(imgdata, format='svg')
    imgdata.seek(0)
    data = imgdata.getvalue().replace(before, after, 1)
    plt.close()
    return data

############
### DONE ###
############
@login_required(login_url='/login')
def logout(request):
    if request.user.is_authenticated:
        DjangoAuth.logout(request)
        return redirect("/login")
    else:
        return redirect("/login")
    
############
### DONE ###
############
@login_required(login_url='/login')
def status(request):
    try:
        notifs = {"notifications":len(SiteRecommendation.objects.filter(user_id=request.user.id))}
    except:
        notifs = {"notifications":0}
    try:
        print("SiteThreatStatistic: ",SiteThreatStatistic.objects.filter(user_id = request.user.id))
        data = [float(i.risk) for i in SiteThreatStatistic.objects.filter(user_id = request.user.id)]
    except:
        data = [0,0,0,0]
    vulns = {"crit":data.count(0.40), "high":data.count(0.30),"mid":data.count(0.20),"low":data.count(0.10)}
    try:
        pass
    except:
        pass
    try:
        company = {"company":Company.objects.get(user_id = request.user.id).name}
    except:
        company = {"company":"Компания"}
    return render(request, 'home2.html', {"task":request.path, "image_path1":schedule(request), "image_path2":schedule_1(request), "mail":request.user.email}|company|vulns|notifs)

############
### DONE ###
############
@login_required(login_url='/login')
def recomendation(request): 
    try:
        notifs = {"notifications":len(SiteRecommendation.objects.filter(user_id=request.user.id))}
    except:
        notifs = {"notifications":0}
    recommendations = SiteRecommendation.objects.filter(user_id = request.user.id)
    recommendations = {"recommendations":[(i.title, "---->      "+str(i.description)) for i in recommendations]}
    if recommendations=={'recommendations': []}:
        recommendations = {'recommendations': [("", 'Рекомендаций нет')]}
    try:
        company = {"company":Company.objects.get(user_id = request.user.id).name}
    except:
        company = {"company":"Компания"}
    return render(request, 'home2.html', {"task":request.path, "mail":request.user.email}|company|recommendations|notifs)

############
### DONE ###
############
@login_required(login_url='/login')
def advanced(request): 
    notifs = {"notifications":len(SiteRecommendation.objects.filter(user_id=request.user.id))}
    try:
        company = {"company":Company.objects.get(user_id = request.user.id).name}
    except:
        company = {"company":"Компания"}
    return render(request, 'home2.html', {"task":request.path, "mail":request.user.email}|company|notifs)

############
### DONE ###
############
@login_required(login_url='/login')
def configuration(request):
    try:
        notifs = {"notifications":len(SiteRecommendation.objects.filter(user_id=request.user.id))}
    except:
        notifs = {"notifications":0}

    try:
        SiteVerificationListItem_data = SiteVerificationListItem.objects.filter(user_id = request.user.id)
        SiteVerificationListItem_data = "\n".join([i.value for i in SiteVerificationListItem_data])
        SiteVerification_data = SiteVerification.objects.get(user_id = request.user.id)
        default_values1 = {"period":SiteVerification_data.period,"site_list1":SiteVerificationListItem_data}
    except:
        default_values1 = {"period":'week',"site_list1":''}

    try:
       EmailNotificationListItem_data = EmailNotificationListItem.objects.filter(user_id = request.user.id)
       EmailNotificationListItem_data = "\n".join([i.value for i in EmailNotificationListItem_data])
       EmailNotification_data = EmailNotification.objects.get(user_id = request.user.id) 
       default_values2 = {"period":EmailNotification_data.period,"site_list1":EmailNotificationListItem_data}
    except:
        #default_values2 = {"period":'day',"site_list1":''}
        print("DAMM")


    if request.method == 'POST':
        if request.POST["form_diff"] == "SVF":
            print(request.POST)
            try:
                txt_file = request.FILES[list(request.FILES.keys())[0]]
            except:
                txt_file = []
            form1 = ConfigurationForm1(data=request.POST)
            print(form1.is_valid())
            print(form1.errors)
            if form1.is_valid():
                if not(SiteVerification.objects.filter(user_id=request.user.id)):
                    data = form1.save(commit=False)
                    data.user_id = request.user.id
                    data.created_at = datetime.datetime.now()
                    data.updated_at = datetime.datetime.now()
                    data.save()
                else:
                    mod_val = SiteVerification.objects.get(user_id=request.user.id)
                    mod_val.period = request.POST["period"]
                    mod_val.updated_at = datetime.datetime.now()
                    mod_val.save()
                if txt_file:
                    addresses = txt_file.readlines()
                    for address in addresses:
                        d = QueryDict(mutable=True)
                        d["value"] = str(address, "utf-8").strip()
                        d["created_at"] = datetime.datetime.now()
                        d["updated_at"] = datetime.datetime.now()
                        d["user"] = request.user.id
                        subform1 = ListConfigurationForm1(data=d)
                        if subform1.is_valid() and not(SiteVerificationListItem.objects.filter(user=d["user"], value=d['value'].strip())):
                            subform1.save(commit=False)
                            print("OK")
                            subform1.save()
                            print(d['value'], "NOT FOUND")
                            
                if request.POST["site_list1"] != "":    
                    for site in str(request.POST["site_list1"]).split("\n"):
                        print(site)
                        d = QueryDict(mutable=True)
                        d["value"] = str(site)
                        d["created_at"] = datetime.datetime.now()
                        d["updated_at"] = datetime.datetime.now()
                        d["user"] = request.user.id
                        print(d)
                        subform1 = ListConfigurationForm1(data=d)
                        print(subform1.errors)
                        if subform1.is_valid() and not(SiteVerificationListItem.objects.filter(user=d["user"], value=d['value'].strip())):
                            subform1.save(commit=False)

                            print("OK")
                            subform1.save()
                            print(d['value'], "NOT FOUND")
        else:
            form1 = ConfigurationForm1(initial=default_values1)



        if request.POST["form_diff"] == "EVF":
            print(request.POST)
            try:
                txt_file = request.FILES[list(request.FILES.keys())[0]]
            except:
                txt_file = []
            form2 = ConfigurationForm2(data=request.POST)
            print(form2.is_valid())
            print(form2.errors)
            if form2.is_valid():
                if not(EmailNotification.objects.filter(user_id=request.user.id)):
                    print("OK")
                    data = form2.save(commit=False)
                    data.user_id = request.user.id
                    data.created_at = datetime.datetime.now()
                    data.updated_at = datetime.datetime.now()
                    print(data)
                    data.save()
                else:
                    mod_val = EmailNotification.objects.get(user_id=request.user.id)
                    mod_val.period = request.POST["period"]
                    mod_val.updated_at = datetime.datetime.now()
                    mod_val.save()
                print(form2.errors)
                if txt_file:
                    addresses = txt_file.readlines()
                    for address in addresses:
                        d = QueryDict(mutable=True)
                        d["value"] = str(address, "utf-8").strip()
                        d["created_at"] = datetime.datetime.now()
                        d["updated_at"] = datetime.datetime.now()
                        d["user"] = request.user.id
                        d['email_list_id'] = int(EmailNotification.objects.get(user_id=request.user.id).id)
                        subform2 = ListConfigurationForm2(data=d)
                        if subform2.is_valid() and not(EmailNotificationListItem.objects.filter(user=d["user"], value=d['value'].strip(), email_list_id=d['email_list_id'])):
                            subform2.save(commit=False)
                            print("OK")
                            subform2.save()

                if request.POST["site_list1"] != "":    
                    for site in str(request.POST["site_list1"]).split("\n"):
                        print(site)
                        d = QueryDict(mutable=True)
                        d["value"] = str(site)
                        d["created_at"] = datetime.datetime.now()
                        d["updated_at"] = datetime.datetime.now()
                        d["user"] = request.user.id
                        d['email_list_id'] = EmailNotification.objects.get(user_id=request.user.id).id
                        print(d)
                        subform2 = ListConfigurationForm2(data=d)
                        print(subform2.errors)
                        if subform2.is_valid() and not(EmailNotificationListItem.objects.filter(user=d["user"], value=d['value'].strip(), email_list_id=d['email_list_id'])):
                            subform2.save(commit=False)

                            print("OK")
                            subform2.save()
                            print(d['value'], "NOT FOUND")
        else:
            form2 = ConfigurationForm2(initial=default_values2)
    else:
        form1 = ConfigurationForm1(initial=default_values1)
        form2 = ConfigurationForm2(initial=default_values2)
    context = { 
        'form1':form1,
        'form2':form2,
    }  
    print(request.path)
    try:
        company = {"company":Company.objects.get(user_id = request.user.id).name}
    except:
        company = {"company":"Компания"}
    return render(request, 'home2.html', {"task":request.path, "mail":request.user.email}|company|context|notifs)

############
### DONE ###
############
@login_required(login_url='/login')
def document(request): # 9717031707, 773016360907
    #fns_data = requests.post('https://egrul.nalog.ru/', json= {'query':'773016360907'})
    #fns_data = requests.get(f'https://egrul.nalog.ru/search-result/{fns_data.json()["t"]}')
    #print(fns_data.json())
    #
    #print(requests.get('https://business.tinkoff.ru/openapi/api/v1/counterparty/excerpt', data = {"orgn":fns_data.json()['rows'][0]['o']}).text)

    try:
        notifs = {"notifications":len(SiteRecommendation.objects.filter(user_id=request.user.id))}
    except:
        notifs = {"notifications":0}
    try:
        company = {"company":Company.objects.get(user_id = request.user.id).name}
    except:
        company = {"company":"Компания"}
    try:
        Company_data = Company.objects.get(user_id = request.user.id)
        default_values = {"name":Company_data.name,"inn":Company_data.inn,"country":Company_data.country,"postcode":Company_data.postcode,"city":Company_data.city,"address":Company_data.address}
    except:
        default_values = {"name":"","inn":"","country":"","postcode":"","city":"","address":""}
    if request.method == 'POST':
        form = DocumentsForm(data=request.POST)
        
        if form.is_valid():
            if not(Company.objects.filter(user_id=request.user.id)):
                data = form.save(commit=False)
                data.user_id = request.user.id
                data.created_at = datetime.datetime.now()
                data.updated_at = datetime.datetime.now()
                data.save()
                pass
            else:
                
                mod_val = Company.objects.get(user_id=request.user.id)
                mod_val.name = request.POST["name"]
                mod_val.inn = request.POST["inn"]
                mod_val.country = Country.objects.get(id = request.POST["country"])
                mod_val.postcode = request.POST["postcode"]
                mod_val.city = request.POST["city"]
                mod_val.address = request.POST["address"]
                mod_val.updated_at = datetime.datetime.now()
                mod_val.save()
            return render(request, 'home2.html', {"task":request.path, "mail":request.user.email, 'form': form}|company|notifs)
    else:
        form = DocumentsForm()
    context = { 
        'form':form,
    }  
    form = DocumentsForm(initial=default_values)
    return render(request, 'home2.html', {"task":request.path, "mail":request.user.email, 'form': form}|company|notifs)

############
### DONE ###
############
@login_required(login_url='/login')
def payment(request):
    try:
        notifs = {"notifications":len(SiteRecommendation.objects.filter(user_id=request.user.id))}
    except:
        notifs = {"notifications":0}
    try:
        company = {"company":Company.objects.get(user_id = request.user.id).name}
    except:
        company = {"company":"Компания"}
    return render(request, 'home2.html', {"task":request.path, "mail":request.user.email}|company|notifs)

############
### DONE ###
############
@login_required(login_url='/login')
def feedback(request):
    try:
        notifs = {"notifications":len(SiteRecommendation.objects.filter(user_id=request.user.id))}
    except:
        notifs = {"notifications":0}
    try:
        company = {"company":Company.objects.get(user_id = request.user.id).name}
    except:
        company = {"company":"Компания"}
    if request.method == 'POST':
        form = FeedBackForm(data=request.POST)
        print(request.POST["feedback"])
        if form.is_valid():
            send_mail('Обратная связь с сайта VDLK', request.POST["feedback"], settings.EMAIL_HOST_USER, ["direct@freedom-imperial.ru"])
            send_mail('Благодарим Вас за обратную связь!', f'В вашем сообщении вы написали следующее:\n\n {request.POST["feedback"]}\n\n Мы уже получили Ваше сообщение и благодарим вас за обратную связь!\nС уважением,\nКоманда VulnDetector', settings.EMAIL_HOST_USER, [request.user.email])
            return redirect("/dashboard/status/")
    else:
        form = FeedBackForm()
    context = { 
        'form1':form,
    }  
    form = FeedBackForm()
    return render(request, 'home2.html', {"task":request.path, "mail":request.user.email}|company|notifs|context)


############
### DONE ###
############
@login_required(login_url='/login')
def PasswordChange(request): 
    try:
        notifs = {"notifications":len(SiteRecommendation.objects.filter(user_id=request.user.id))}
    except:
        notifs = {"notifications":0}   
    try:
        company = {"company":Company.objects.get(user_id = request.user.id).name}
    except:
        company = {"company":"Компания"}      
    if request.method == 'POST':
        form = OurPasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)
            messages.success(request,
                             'Your password was successfully updated!',
                             extra_tags='alert-success')
            return redirect('/logout/')
        else:
            messages.error(request, 'Пароли, которые вы ввели не совпадают.', extra_tags='alert-danger')
    else:
        form = OurPasswordChangeForm(request.user)
    return render(request, 'home2.html', {"task":request.path, "mail":request.user.email}|{'form': form}|company|notifs)


