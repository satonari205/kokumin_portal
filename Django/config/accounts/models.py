from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin
from django.core.validators import MinLengthValidator

class UserManager(BaseUserManager):
    def create_user(self, username,nickname,password):
        if not username:
            raise ValueError('ユーザーの登録にはusernameが必要です。')
        if not nickname:
            raise ValueError('ユーザーの登録にはnicknameが必要です。')
        if not password:
            raise ValueError('ユーザーの登録にはpasswordが必要です。')

        user = self.model(
            username=username,
            nickname=nickname,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username,nickname,password):
        user = self.create_user(
            username=username,
            nickname=nickname,
            password=password,
        )
        user.is_admin=True
        user.is_staff=True
        user.is_superuser=True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(verbose_name='username',max_length=100, unique=True, validators=[MinLengthValidator(5,)])
    nickname = models.CharField(verbose_name='nickname', max_length=100)
    password = models.CharField(verbose_name='password', max_length=100, validators=[MinLengthValidator(8,)])
    image = models.ImageField(verbose_name='プロフィール画像', upload_to="image/", blank=True, null=True)
    bio = models.TextField(verbose_name='自己紹介', max_length=1000, blank=True, null=True)

    is_active = models.BooleanField(default=True)

    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ('nickname',)

    def __str__(self):
        return self.username
