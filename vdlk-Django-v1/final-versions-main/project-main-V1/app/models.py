from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import UserManager
from django.contrib.auth.models import BaseUserManager

import datetime


class Company(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=32)
    inn = models.BigIntegerField()
    postcode = models.IntegerField()
    country = models.ForeignKey('Country', models.DO_NOTHING)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    city = models.CharField(max_length=28)
    address = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'company'

class Country(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=16)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'country'
    def __str__(self):
        return str(self.name)

class EmailNotification(models.Model):
    id = models.BigAutoField(primary_key=True)
    period = models.CharField(max_length=255)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    list_item = models.CharField(max_length=64, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'email_notification'

class EmailNotificationListItem(models.Model):
    id = models.BigAutoField(primary_key=True)
    value = models.CharField(max_length=64)
    email_list_id = models.PositiveBigIntegerField()
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    user = models.ForeignKey('Users', models.DO_NOTHING, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'email_notification_list_item'

class FailedJobs(models.Model):
    id = models.BigAutoField(primary_key=True)
    uuid = models.CharField(unique=True, max_length=255)
    connection = models.TextField()
    queue = models.TextField()
    payload = models.TextField()
    exception = models.TextField()
    failed_at = models.DateTimeField()
    class Meta:
        managed = False
        db_table = 'failed_jobs'

class ImmunityGeneralStatistic(models.Model):
    id = models.BigAutoField(primary_key=True)
    type = models.CharField(max_length=64)
    statistic = models.PositiveIntegerField()
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    user = models.ForeignKey('Users', models.DO_NOTHING, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'immunity_general_statistic'

class ImmunityTypeStatistic(models.Model):
    id = models.BigAutoField(primary_key=True)
    type = models.CharField(max_length=64)
    statistic = models.PositiveIntegerField()
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    user = models.ForeignKey('Users', models.DO_NOTHING, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'immunity_type_statistic'

class Migrations(models.Model):
    migration = models.CharField(max_length=255)
    batch = models.IntegerField()
    class Meta:
        managed = False
        db_table = 'migrations'

class PasswordResets(models.Model):
    email = models.CharField(max_length=255)
    token = models.CharField(max_length=255, primary_key=True)
    created_at = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'password_resets'

class Payment(models.Model):
    id = models.BigAutoField(primary_key=True)
    payment_uuid = models.CharField(max_length=36)
    sum = models.IntegerField()
    transaction_id = models.PositiveBigIntegerField(blank=True, null=True)
    payment_cryptogram = models.CharField(max_length=512, blank=True, null=True)
    currency = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'payment'

class PersonalAccessTokens(models.Model):
    id = models.BigAutoField(primary_key=True)
    tokenable_type = models.CharField(max_length=255)
    tokenable_id = models.PositiveBigIntegerField()
    name = models.CharField(max_length=255)
    token = models.CharField(unique=True, max_length=64)
    abilities = models.TextField(blank=True, null=True)
    last_used_at = models.DateTimeField(blank=True, null=True)
    expires_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'personal_access_tokens'

class SiteRecommendation(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=32)
    description = models.CharField(max_length=256)
    type = models.CharField(max_length=255)
    user_id = models.PositiveBigIntegerField()
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'site_recommendation'

class SiteThreatStatistic(models.Model):
    id = models.BigAutoField(primary_key=True)
    ip = models.CharField(max_length=255, blank=True, null=True)
    hostname = models.CharField(max_length=255, blank=True, null=True)
    service_name = models.CharField(max_length=255, blank=True, null=True)
    cve_bdu_cnvd = models.CharField(max_length=255, blank=True, null=True)
    user_id = models.PositiveBigIntegerField()
    risk = models.DecimalField(max_digits=8, decimal_places=2)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'site_threat_statistic'

class SiteVerification(models.Model):
    id = models.BigAutoField(primary_key=True)
    period = models.CharField(max_length=255)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    list_item = models.CharField(max_length=64, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'site_verification'

class SiteVerificationListItem(models.Model):
    id = models.BigAutoField(primary_key=True)
    value = models.CharField(max_length=64)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    user = models.ForeignKey('Users', models.DO_NOTHING, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'site_verification_list_item'

class UserDocuments(models.Model):
    id = models.BigAutoField(primary_key=True)
    document_url = models.CharField(max_length=255)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'user_documents'

class UserVulnerability(models.Model):
    id = models.BigAutoField(primary_key=True)
    critical = models.IntegerField()
    high = models.IntegerField()
    middle = models.IntegerField()
    low = models.IntegerField()
    user = models.ForeignKey('Users', models.DO_NOTHING)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'user_vulnerability'

class Users(AbstractBaseUser):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(unique=True, max_length=255)
    email_verified_at = models.DateTimeField(blank=True, null=True)
    password = models.CharField(max_length=255)
    remember_token = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    login = models.CharField(unique=True, max_length=255)
    middle_name = models.CharField(max_length=255, blank=True, null=True)
    surname = models.CharField(max_length=255, blank=True, null=True)
    USERNAME_FIELD = 'login'
    last_login = datetime.datetime.now()
    objects = UserManager()
    class Meta:
        managed = False
        db_table = 'users'

class Versions(models.Model):
    baseversion = models.CharField(db_column='Baseversion', max_length=255)  
    freeversion = models.CharField(db_column='Freeversion', max_length=255)  
    prodversion = models.CharField(db_column='Prodversion', max_length=255)  
    class Meta:
        managed = False
        db_table = 'versions'