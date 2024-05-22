from django import forms
from .models import Users, Company, SiteVerification, EmailNotification, Country, EmailNotificationListItem, SiteVerificationListItem
from django.contrib.auth.forms import UserCreationForm, PasswordChangeForm, PasswordResetForm, SetPasswordForm
from django.contrib.auth import get_user_model

class RegistrationForm(UserCreationForm):
    login = forms.CharField(min_length=3, label="Имя пользователя", required=True, help_text="Введите Ваше имя", widget=forms.TextInput(attrs={'class':'au-input au-input--full', 'autocomplete':"on"}))
    email = forms.EmailField(min_length=3, label="Адрес Email", required=True, help_text="Введите Ваш Email", widget=forms.EmailInput(attrs={'class':'au-input au-input--full', 'autocomplete':"on"}))
    password = forms.CharField(label="Пароль", widget=forms.PasswordInput(attrs={'class':'au-input au-input--full'}))
    password1 = forms.CharField(label="", widget=forms.HiddenInput())
    password2 = forms.CharField(label="", widget=forms.HiddenInput())
    class Meta:
        model = get_user_model()
        fields = ['login', 'email', 'password']
class ForgotPassword(PasswordResetForm):    
    email = forms.EmailField(min_length=3, label="Адрес Email", required=True, help_text="Введите Ваш Email", widget=forms.TextInput(attrs={'class':'au-input au-input--full', 'autocomplete':"on"}))
    class Meta:
        model = get_user_model()
        fields = ['email']
        
class AuthForm(forms.ModelForm):
    login = forms.CharField(min_length=3, label="Имя пользователя", required=True, help_text="Введите Ваше имя", widget=forms.TextInput(attrs={'class':'au-input au-input--full', 'autocomplete':"on"}))
    password = forms.CharField(min_length=3, label="Пароль", required=True, widget=forms.PasswordInput(attrs={'class':'au-input au-input--full', 'autocomplete':"on"}), help_text="Введите Ваш пароль")
    class Meta:
        model = Users
        fields = ['login', 'password']
class OurPasswordChangeForm(PasswordChangeForm):
    old_password = forms.CharField(min_length=3, label="Текущий пароль", required=True, widget=forms.PasswordInput(attrs={'class':'au-input au-input--full'}))
    new_password1 = forms.CharField(min_length=3, label="Новый пароль", required=True, widget=forms.PasswordInput(attrs={'class':'au-input au-input--full'}))
    new_password2 = forms.CharField(min_length=3, label="Повторите новый пароль", required=True, widget=forms.PasswordInput(attrs={'class':'au-input au-input--full'}))
    class Meta:
        model = Users
        fields = ['old_password', 'new_password1']

class OurPasswordChangeForm2(SetPasswordForm):
    new_password1 = forms.CharField(min_length=3, label="Новый пароль", required=True, widget=forms.PasswordInput(attrs={'class':'au-input au-input--full'}))
    new_password2 = forms.CharField(min_length=3, label="Повторите новый пароль", required=True, widget=forms.PasswordInput(attrs={'class':'au-input au-input--full'}))
    class Meta:
        model = Users
        fields = ['new_password1', 'new_password2']

class DocumentsForm(forms.ModelForm):
    name = forms.CharField(min_length=3, label="Название организации", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder': 'ООО Ромашка - пример'})) 
    inn = forms.IntegerField(label="ИНН", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder': 'XYZXXXXXXXX'}))
    country = forms.ModelChoiceField(queryset=Country.objects.all(), to_field_name="id", label="Страна", required=True, widget=forms.Select(attrs={'class':'form-control'}))
    postcode = forms.IntegerField(label="Почтовый индекс", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder': '123123'}))
    city = forms.CharField(min_length=3, label="Город", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder': 'Город регистрации юр.лица'}))
    address = forms.CharField(min_length=3, label="Адрес", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder': 'Юридический адрес'}))
    class Meta:
        model = Company
        fields = ['name', 'inn','country','postcode','city','address']
class ConfigurationForm1(forms.ModelForm):
    choices = [("week","1 раз в неделю"),("day","1 раз в день"),("regular","Непрерывный")]
    site_list1 = forms.CharField(widget=forms.Textarea(attrs={'class':'form-control', 'placeholder': "https://wwww."}), required=False, label="Список для мониторинга")
    site_list2 = forms.FileField(widget=forms.FileInput(attrs={'class':'form-control'}), label="Загрузить список для мониторинга", required=False)
    period = forms.ChoiceField(choices=choices, label="Период", widget=forms.Select(attrs={'class':'form-control'}))
    form_diff = forms.CharField(widget=forms.HiddenInput({"value":"SVF"}), label="")
    class Meta:
        model = SiteVerification 
        fields = ['site_list1', 'site_list2','period']
class ListConfigurationForm1(forms.ModelForm):
    value = forms.CharField()
    created_at = forms.DateTimeField()
    updated_at = forms.DateTimeField()
    user = forms.ModelChoiceField(queryset=Users.objects.all())
    class Meta:
        model = SiteVerificationListItem 
        fields = ['value', "created_at","updated_at","user"]
class ConfigurationForm2(forms.ModelForm):
    choices = [("day","1 раз в сутки"),("regular","Незамедлительно")]
    site_list1 = forms.CharField(widget=forms.Textarea(attrs={'class':'form-control', 'placeholder': "username@example.org"}), required=False, label="Список Email адресов")
    site_list2 = forms.FileField(widget=forms.FileInput(attrs={'class':'form-control'}), label="Загрузить список", required=False)
    period = forms.ChoiceField(choices=choices, label="Период", widget=forms.Select(attrs={'class':'form-control'}))
    form_diff = forms.CharField(widget=forms.HiddenInput({"value":"EVF"}), label="")
    class Meta:
        model = EmailNotification 
        fields = ['site_list1', 'site_list2','period']
class ListConfigurationForm2(forms.ModelForm):
    value = forms.CharField()
    created_at = forms.DateTimeField()
    updated_at = forms.DateTimeField()
    user = forms.ModelChoiceField(queryset=Users.objects.all())
    #email_list_id = forms.ModelChoiceField(queryset=EmailNotification.objects.all()) - Для спринта 2 
    email_list_id = forms.IntegerField()
    class Meta:
        model = EmailNotificationListItem 
        fields = ['value', 'created_at', 'updated_at' ,'user', 'email_list_id']


class FeedBackForm(forms.Form):
    feedback = forms.CharField(widget=forms.Textarea(attrs={'class':'form-control', 'placeholder': "Напишите нам!"}), required=False, label="Ваше сообщение")
    class Meta:
        fields = ['feedback']
