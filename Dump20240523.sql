-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: vdlk
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `app_user`
--

DROP TABLE IF EXISTS `app_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `nickname` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_user`
--

LOCK TABLES `app_user` WRITE;
/*!40000 ALTER TABLE `app_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `app_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add user',7,'add_user'),(26,'Can change user',7,'change_user'),(27,'Can delete user',7,'delete_user'),(28,'Can view user',7,'view_user');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `inn` bigint NOT NULL,
  `postcode` int NOT NULL,
  `country_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `city` varchar(28) NOT NULL,
  `address` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `company_country_id_foreign` (`country_id`),
  KEY `company_user_id_foreign` (`user_id`),
  CONSTRAINT `company_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `company_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (4,'123123',773016360907,121170,4,567,'Москва','123123','2024-04-16 20:32:49','2024-04-16 20:32:49'),(5,'ИП Веселовский Слава',773016360907,108801,4,569,'г. Прохладный','Кабардино-Балкарская Республика, г. Прохладный, ул. 2','2024-04-18 12:50:02','2024-04-18 12:59:11'),(6,'123123',1231231123,123123,3,577,'Москва','121170, РОССИЯ,','2024-04-20 11:04:13','2024-04-20 11:04:13');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(16) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Армения','2022-10-06 13:13:02','2022-10-06 13:13:02'),(2,'Белоруссия','2022-10-06 13:13:02','2022-10-06 13:13:02'),(3,'Грузия','2022-10-06 13:13:02','2022-10-06 13:13:02'),(4,'Россия','2022-10-06 13:13:02','2022-10-06 13:13:02');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(7,'app','user'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2024-04-15 16:59:25.580364'),(2,'auth','0001_initial','2024-04-15 16:59:25.758873'),(3,'admin','0001_initial','2024-04-15 16:59:25.808954'),(4,'admin','0002_logentry_remove_auto_add','2024-04-15 16:59:25.815274'),(5,'admin','0003_logentry_add_action_flag_choices','2024-04-15 16:59:25.822363'),(6,'app','0001_initial','2024-04-15 16:59:25.830694'),(7,'app','0002_user_email','2024-04-15 16:59:25.843503'),(8,'contenttypes','0002_remove_content_type_name','2024-04-15 16:59:25.889531'),(9,'auth','0002_alter_permission_name_max_length','2024-04-15 16:59:25.957769'),(10,'auth','0003_alter_user_email_max_length','2024-04-15 16:59:25.980609'),(11,'auth','0004_alter_user_username_opts','2024-04-15 16:59:25.988094'),(12,'auth','0005_alter_user_last_login_null','2024-04-15 16:59:26.014219'),(13,'auth','0006_require_contenttypes_0002','2024-04-15 16:59:26.015790'),(14,'auth','0007_alter_validators_add_error_messages','2024-04-15 16:59:26.022490'),(15,'auth','0008_alter_user_username_max_length','2024-04-15 16:59:26.051748'),(16,'auth','0009_alter_user_last_name_max_length','2024-04-15 16:59:26.080430'),(17,'auth','0010_alter_group_name_max_length','2024-04-15 16:59:26.096741'),(18,'auth','0011_update_proxy_permissions','2024-04-15 16:59:26.107024'),(19,'auth','0012_alter_user_first_name_max_length','2024-04-15 16:59:26.136988'),(20,'sessions','0001_initial','2024-04-15 16:59:26.152866');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('0xvy5ltkxjqz1gqhj6yvjh3ymix6fc8x','e30:1s409l:8wC-CLuOI8_IEEDvEOthQzf5C5jVEf4oVDtqpjBOAkA','2024-05-06 16:21:33.595412'),('1v85npme1rigdd0zn78n2k0zjadclwm2','.eJxVjEEOwiAQRe_C2pAWZGBcuvcMZGBAqoYmpV0Z7y5NutDtf-_9t_C0rcVvLS1-YnERBpw4_a6B4jPVHfGD6n2Wca7rMgW5K_KgTd5mTq_r4f4dFGql18GiCTBYogCUICNpOju0DKRYdYKonONk2cGojYlaj053wSYMOQ_i8wU3FTgK:1rwRTT:p8qBNm1a2QRmj0mf6XDbbqBWGj5WUNzl8h1hX35ZuyI','2024-04-29 18:54:39.152039'),('50ik4k5k78kn419sf3vj2n036r78zq12','.eJxVjDsOwjAQBe_iGln4uzElPWew1t41DiBHipMKcXcSKQW0b2beW0RclxrXznMcSVyEAy1Ov2vC_OS2I3pgu08yT22ZxyR3RR60y9tE_Loe7t9BxV632msOptiEZxcgKK80gFFWEzsqZUPF02CDzZlQK6eHjAYSBQvAxZARny8drjgq:1ry4M4:d20P8aUt6a0rpIqL9Dmtvrp1e3RUETTwKO1tXWkrIwU','2024-04-20 07:37:44.774786'),('5bmt38c5uwehz0mamtdbvor7k6h837aa','.eJxVjDEOwjAMRe-SGUVp4rQWIztnqOzYIQWUSk07Ie4OlTrA-t97_2VG2tYybk2XcRJzNrFHc_pdmdJD647kTvU22zTXdZnY7oo9aLPXWfR5Ody_g0KtfOu-A4_iVIIjD4oBBzd0OWVxyffMCoAONOc4eA5d9JwIIwUUIFZx5v0BKdw4jA:1rwRQF:aZFTtH4AzE1t0l6K3StoFjFoK7ORkrxv_pUQl9k61CE','2024-04-29 18:51:19.422402'),('a8mqxpnli6qtqx5oprdkq0exai9xm2pb','.eJxVjEEOwiAQRe_C2pBhWkrGpXvPQAYYpGpoUtqV8e5K0oVu_uK_l_dSnvet-L3J6uekzso6UqffN3B8SO0o3bneFh2Xuq1z0F3RB236uiR5Xg73L1C4lR5mCRlidFYmGjkE5BE4ZTuwEImdTEaIgGxIAACRA33HZZcJBzTq_QFZuTiD:1ry8sA:1unNNQ1j8nSz87a8R5FObMO8R9gmuqq44nvIsdUXFJg','2024-04-20 12:27:10.586726'),('aqoj0b4ctb4gjpaavs7k6pt95kfw70wv','.eJxVjMEOwiAQRP-FsyEsFFw8evcbCCxbqRpISnsy_rtt0oOeJpn3Zt4ixHUpYe08hymLi7DOi9NvmyI9ue4oP2K9N0mtLvOU5K7Ig3Z5a5lf18P9Oyixl2191hkHUBCVTl6RGaN3o3HWok_AyjrCwRAAbJGdYYKMoEFp8mgZjfh8AQa1Nuo:1rxSQk:MHEUbPt_uVWwu2IP8DM3Ez1Jc8agINC1GSMc7vnC3Fc','2024-04-18 14:09:02.395140'),('avs9wnrw6tkiyoou8mf5stl2ky61rsn8','.eJxVjEEOwiAQRe_C2pBhWkrGpXvPQAYYpGpoUtqV8e5K0oVu_uK_l_dSnvet-L3J6uekzso6UqffN3B8SO0o3bneFh2Xuq1z0F3RB236uiR5Xg73L1C4lR5mCRlidFYmGjkE5BE4ZTuwEImdTEaIgGxIAACRA33HZZcJBzTq_QFZuTiD:1rzmB2:huvYNAsRiuj1rU1Je41SgFAC78lFb3IRDmb25Bo2ZJk','2024-04-25 00:37:24.086191'),('hpmq4s19d13aipe5bkspfy2zrmt4pedu','.eJxVjEEOgkAMRe8yazPBMi0zLt1zBtLSjqAGEgZWxrsrCQvd_vfef7mOt3XotmJLN6q7OKTGnX5X4f5h0470ztNt9v08rcsoflf8QYtvZ7Xn9XD_DgYuw7eug3KqlayBCBiRkWIVYrIecpUxGUAmCYgCJIIWKlGmOsczkUJM7v0BHWs3yg:1rwRJd:amfJkfLTA80lDcAx6_Ey88TrNekr43XAIhnzhINLtU4','2024-04-29 18:44:29.680310'),('j8kwueymxw9rzg8gghu0zxi54myzsjvp','.eJxVjEEOwiAQRe_C2hAHSgGX7nsGMjCDVA0kpV0Z765NutDtf-_9lwi4rSVsnZcwk7gIY704_a4R04PrjuiO9dZkanVd5ih3RR60y6kRP6-H-3dQsJdvnW0ePRAqBO2izs47DSkPnLyJjJ4yMWptWDFABFI0Mp2jTs4OCM6J9wdZpTk6:1s46QA:eTPjPeZgVpiBQUQtPgMmTI3rduPcvqBtNxOdY-CL8a8','2024-05-06 23:02:54.478035'),('nscfrjk2rjw2rotc5pk8rf70eroyeae9','.eJxVjMEOwiAQRP-FsyEsFFw8evcbCCxbqRpISnsy_rtt0oOeJpn3Zt4ixHUpYe08hymLi7DOi9NvmyI9ue4oP2K9N0mtLvOU5K7Ig3Z5a5lf18P9Oyixl2191hkHUBCVTl6RGaN3o3HWok_AyjrCwRAAbJGdYYKMoEFp8mgZjfh8AQa1Nuo:1rxSZv:d9kYdnjzrVft5eFzvaoZaVCNnonNv6dzoJ0mRX9bSmg','2024-04-18 15:17:31.191825'),('zjzg0czo9tq5z3ywt90eclrtpeskg30o','.eJxVjEEOgkAMRe8yazPBMi0zLt1zBtLSjqAGEgZWxrsrCQvd_vfef7mOt3XotmJLN6q7OKTGnX5X4f5h0470ztNt9v08rcsoflf8QYtvZ7Xn9XD_DgYuw7eug3KqlayBCBiRkWIVYrIecpUxGUAmCYgCJIIWKlGmOsczkUJM7v0BHWs3yg:1rwsy7:Os-Fb96hPtO2etOGd18W62vNcedbunSgbOq5M4JS59s','2024-05-01 00:16:07.594577');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email_notification`
--

DROP TABLE IF EXISTS `email_notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `email_notification` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `period` varchar(255) NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `list_item` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `email_notification_user_id_foreign` (`user_id`),
  CONSTRAINT `email_notification_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_notification`
--

LOCK TABLES `email_notification` WRITE;
/*!40000 ALTER TABLE `email_notification` DISABLE KEYS */;
INSERT INTO `email_notification` VALUES (43,'day',567,'2024-04-17 23:45:46','2024-04-17 23:53:50',NULL),(44,'day',578,'2024-04-20 11:24:17','2024-04-20 11:24:17',NULL),(45,'day',579,'2024-04-20 11:27:10','2024-04-24 23:44:12',NULL);
/*!40000 ALTER TABLE `email_notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email_notification_list_item`
--

DROP TABLE IF EXISTS `email_notification_list_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `email_notification_list_item` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `value` varchar(64) NOT NULL,
  `email_list_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `email_verification_list_item_email_list_id_foreign` (`email_list_id`),
  KEY `email_notification_list_item_user_id_foreign` (`user_id`),
  CONSTRAINT `email_notification_list_item_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=264 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_notification_list_item`
--

LOCK TABLES `email_notification_list_item` WRITE;
/*!40000 ALTER TABLE `email_notification_list_item` DISABLE KEYS */;
INSERT INTO `email_notification_list_item` VALUES (257,'direct@freedom-imperial.ru',43,'2024-04-17 23:48:56','2024-04-17 23:48:56',567),(258,'direct@freedom-imperial.ru',43,'2024-04-17 23:49:31','2024-04-17 23:49:31',567),(259,'direct3@freedom-imperial.ru',43,'2024-04-17 23:53:50','2024-04-17 23:53:50',567),(260,'picachu517@yandex.ru',45,'2024-04-20 11:27:10','2024-04-20 11:27:10',579),(261,'picachu517@yandex.ru',45,'2024-04-24 23:40:26','2024-04-24 23:40:26',579),(262,'picachu517@yandex.ru',45,'2024-04-24 23:41:21','2024-04-24 23:41:21',579),(263,'direct@freedom-imperial.ru',45,'2024-04-24 23:43:59','2024-04-24 23:43:59',579);
/*!40000 ALTER TABLE `email_notification_list_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `immunity_general_statistic`
--

DROP TABLE IF EXISTS `immunity_general_statistic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `immunity_general_statistic` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(64) NOT NULL,
  `statistic` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `immunity_general_statistic_user_id_foreign` (`user_id`),
  CONSTRAINT `immunity_general_statistic_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3972 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `immunity_general_statistic`
--

LOCK TABLES `immunity_general_statistic` WRITE;
/*!40000 ALTER TABLE `immunity_general_statistic` DISABLE KEYS */;
INSERT INTO `immunity_general_statistic` VALUES (3968,'ИТ Иммунитет',100,'2024-04-13 16:17:06','2024-04-13 16:17:06',572),(3969,'ИТ Иммунитет',0,'2024-05-13 16:33:15','2024-05-13 16:33:15',572),(3970,'ИТ Иммунитет',49,'2024-06-13 16:33:15','2024-06-13 16:33:15',572),(3971,'ИТ Иммунитет',83,'2024-06-14 16:33:15','2024-06-14 16:33:15',572);
/*!40000 ALTER TABLE `immunity_general_statistic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `immunity_type_statistic`
--

DROP TABLE IF EXISTS `immunity_type_statistic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `immunity_type_statistic` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(64) NOT NULL,
  `statistic` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `immunity_type_statistic_user_id_foreign` (`user_id`),
  CONSTRAINT `immunity_type_statistic_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19444 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `immunity_type_statistic`
--

LOCK TABLES `immunity_type_statistic` WRITE;
/*!40000 ALTER TABLE `immunity_type_statistic` DISABLE KEYS */;
INSERT INTO `immunity_type_statistic` VALUES (79,'Домены',95,'2022-11-09 08:27:23','2022-11-09 08:27:23',572),(80,'Общие',69,'2022-11-09 08:27:38','2022-11-09 08:27:38',572),(83,'Сети',100,'2022-11-09 08:27:42','2022-11-09 08:27:42',572),(84,'Телефония',100,'2022-11-09 08:27:43','2022-11-09 08:27:43',572),(85,'Финансы',30,'2022-11-09 08:27:43','2022-11-09 08:27:43',572),(86,'Шлюзы',51,'2022-11-09 08:27:43','2022-11-09 08:27:43',572),(87,'Почта',63,'2022-11-09 08:27:43','2022-11-09 08:27:43',572),(88,'Разработка',77,'2022-11-09 08:27:43','2022-11-09 08:27:43',572),(89,'Данные',56,'2022-11-09 08:27:23','2022-11-09 08:27:23',572),(90,'Данные',70,'2022-11-09 08:27:23','2022-11-09 08:27:23',572),(91,'Данные',35,'2022-11-09 08:27:23','2022-11-09 08:27:23',572),(92,'Данные',80,'2022-11-09 08:27:23','2022-11-09 08:27:23',572),(93,'Данные',84,'2022-11-09 08:27:23','2022-11-09 08:27:23',572);
/*!40000 ALTER TABLE `immunity_type_statistic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
INSERT INTO `password_resets` VALUES ('picachu517@yandex.ru','localhost:8000/auth/passwordreset/DXhPhwqiUNIKzQewktNabevmN','2024-05-06 13:03:16'),('picachu517@yandex.ru','localhost:8000/auth/passwordreset/DXhPhwqiUNIKzQewktNabevmN','2024-05-06 13:03:16'),('picachu517@yandex.ru','localhost:8000/auth/passwordreset/DXhPhwqiUNIKzQewktNabevmN','2024-05-06 13:03:16'),('picachu517@yandex.ru','localhost:8000/auth/passwordreset/DXhPhwqiUNIKzQewktNabevmN','2024-05-06 13:03:16'),('picachu517@yandex.ru','localhost:8000/auth/passwordreset/DXhPhwqiUNIKzQewktNabevmN','2024-05-06 13:03:16'),('picachu517@yandex.ru','localhost:8000/auth/passwordreset/DXhPhwqiUNIKzQewktNabevmN','2024-05-06 13:03:16'),('picachu517@yandex.ru','localhost:8000/auth/passwordreset/DXhPhwqiUNIKzQewktNabevmN','2024-05-06 13:03:16'),('picachu517@yandex.ru','localhost:8000/auth/passwordreset/DXhPhwqiUNIKzQewktNabevmN','2024-05-06 13:03:16'),('picachu517@yandex.ru','localhost:8000/auth/passwordreset/DXhPhwqiUNIKzQewktNabevmN','2024-05-06 13:03:16'),('picachu517@yandex.ru','localhost:8000/auth/passwordreset/gpGzApDNwpWMeQitdqUUzkZMb','2024-05-06 13:05:04');
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `payment_uuid` char(36) NOT NULL,
  `sum` int NOT NULL,
  `transaction_id` bigint unsigned DEFAULT NULL,
  `payment_cryptogram` varchar(512) DEFAULT NULL,
  `currency` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'created',
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payment_user_id_foreign` (`user_id`),
  CONSTRAINT `payment_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1090 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_recommendation`
--

DROP TABLE IF EXISTS `site_recommendation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_recommendation` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `description` varchar(256) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT '0',
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `site_recommendation_type_index` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_recommendation`
--

LOCK TABLES `site_recommendation` WRITE;
/*!40000 ALTER TABLE `site_recommendation` DISABLE KEYS */;
INSERT INTO `site_recommendation` VALUES (14,'РЕКОМЕНДОВАНО: выполнить','Перенести OpenSSH, внутрь периметра или закрыть VPN или закрыть файровлом. Не выполнение ведет к накоплению рисков потери контроля за ИТ системой','recommendation',567,'2022-12-01 19:01:34','2022-12-01 19:01:34');
/*!40000 ALTER TABLE `site_recommendation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_threat_statistic`
--

DROP TABLE IF EXISTS `site_threat_statistic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_threat_statistic` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) DEFAULT NULL,
  `hostname` varchar(255) DEFAULT NULL,
  `service_name` varchar(255) DEFAULT NULL,
  `cve_bdu_cnvd` varchar(255) DEFAULT NULL,
  `user_id` bigint unsigned NOT NULL,
  `risk` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1690260 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_threat_statistic`
--

LOCK TABLES `site_threat_statistic` WRITE;
/*!40000 ALTER TABLE `site_threat_statistic` DISABLE KEYS */;
INSERT INTO `site_threat_statistic` VALUES (1664510,'104.21.32.80','api.teleport.media','Открытый TCP','2',567,0.10,'2024-04-09 04:55:07','2024-04-09 04:55:07');
/*!40000 ALTER TABLE `site_threat_statistic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_verification`
--

DROP TABLE IF EXISTS `site_verification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_verification` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `period` varchar(255) NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `list_item` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `site_verification_user_id_foreign` (`user_id`),
  CONSTRAINT `site_verification_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_verification`
--

LOCK TABLES `site_verification` WRITE;
/*!40000 ALTER TABLE `site_verification` DISABLE KEYS */;
INSERT INTO `site_verification` VALUES (44,'week',567,'2024-04-17 04:33:12','2024-04-17 04:33:12',NULL),(45,'week',567,'2024-04-17 04:33:22','2024-04-17 04:33:22',NULL),(46,'week',567,'2024-04-17 22:42:21','2024-04-17 22:42:21',NULL),(47,'week',567,'2024-04-17 22:43:12','2024-04-17 22:43:12',NULL),(48,'week',567,'2024-04-17 22:46:33','2024-04-17 22:46:33',NULL),(49,'week',567,'2024-04-17 22:47:16','2024-04-17 22:47:16',NULL),(50,'week',567,'2024-04-17 22:48:14','2024-04-17 22:48:14',NULL),(51,'week',567,'2024-04-17 22:48:45','2024-04-17 22:48:45',NULL),(52,'week',567,'2024-04-17 22:49:07','2024-04-17 22:49:07',NULL),(53,'week',567,'2024-04-17 22:49:36','2024-04-17 22:49:36',NULL),(54,'week',567,'2024-04-17 22:52:59','2024-04-17 22:52:59',NULL),(55,'week',567,'2024-04-17 22:53:17','2024-04-17 22:53:17',NULL),(56,'week',567,'2024-04-17 22:53:48','2024-04-17 22:53:48',NULL),(57,'week',567,'2024-04-17 22:55:19','2024-04-17 22:55:19',NULL),(58,'week',567,'2024-04-17 22:56:42','2024-04-17 22:56:42',NULL),(59,'week',567,'2024-04-17 22:58:30','2024-04-17 22:58:30',NULL),(60,'week',567,'2024-04-17 22:59:43','2024-04-17 22:59:43',NULL),(61,'week',567,'2024-04-17 23:02:25','2024-04-17 23:02:25',NULL),(62,'week',567,'2024-04-17 23:03:01','2024-04-17 23:03:01',NULL),(63,'week',567,'2024-04-17 23:04:11','2024-04-17 23:04:11',NULL),(64,'week',567,'2024-04-17 23:04:24','2024-04-17 23:04:24',NULL),(65,'week',567,'2024-04-17 23:05:26','2024-04-17 23:05:26',NULL),(66,'week',567,'2024-04-17 23:06:43','2024-04-17 23:06:43',NULL),(67,'week',567,'2024-04-17 23:06:47','2024-04-17 23:06:47',NULL),(68,'week',567,'2024-04-17 23:07:08','2024-04-17 23:07:08',NULL),(69,'week',567,'2024-04-17 23:07:29','2024-04-17 23:07:29',NULL),(70,'week',567,'2024-04-17 23:07:58','2024-04-17 23:07:58',NULL),(71,'week',567,'2024-04-17 23:08:14','2024-04-17 23:08:14',NULL),(72,'week',567,'2024-04-17 23:08:57','2024-04-17 23:08:57',NULL),(73,'week',567,'2024-04-17 23:09:16','2024-04-17 23:09:16',NULL),(74,'week',567,'2024-04-17 23:10:22','2024-04-17 23:10:22',NULL),(75,'week',567,'2024-04-17 23:11:03','2024-04-17 23:11:03',NULL),(76,'week',567,'2024-04-17 23:12:41','2024-04-17 23:12:41',NULL),(77,'week',567,'2024-04-17 23:12:50','2024-04-17 23:12:50',NULL),(78,'week',567,'2024-04-17 23:13:12','2024-04-17 23:13:12',NULL),(79,'week',567,'2024-04-17 23:18:45','2024-04-17 23:18:45',NULL),(80,'week',567,'2024-04-17 23:19:00','2024-04-17 23:19:00',NULL),(81,'week',567,'2024-04-17 23:19:45','2024-04-17 23:19:45',NULL),(82,'week',567,'2024-04-17 23:20:36','2024-04-17 23:20:36',NULL),(83,'week',567,'2024-04-17 23:20:58','2024-04-17 23:20:58',NULL),(84,'week',567,'2024-04-17 23:21:07','2024-04-17 23:21:07',NULL),(85,'day',567,'2024-04-17 23:36:13','2024-04-17 23:36:13',NULL),(86,'day',567,'2024-04-17 23:38:22','2024-04-17 23:38:22',NULL),(87,'day',567,'2024-04-17 23:38:54','2024-04-17 23:38:54',NULL),(88,'day',567,'2024-04-17 23:40:35','2024-04-17 23:40:35',NULL),(89,'day',567,'2024-04-17 23:41:00','2024-04-17 23:41:00',NULL),(90,'day',567,'2024-04-17 23:42:02','2024-04-17 23:42:02',NULL),(91,'day',567,'2024-04-17 23:44:38','2024-04-17 23:44:38',NULL),(92,'day',567,'2024-04-17 23:45:35','2024-04-17 23:45:35',NULL),(93,'week',569,'2024-04-18 12:59:55','2024-04-18 13:00:32',NULL),(94,'day',572,'2024-04-20 06:25:43','2024-04-20 06:25:43',NULL),(95,'week',579,'2024-04-20 11:31:10','2024-04-24 23:45:43',NULL);
/*!40000 ALTER TABLE `site_verification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_verification_list_item`
--

DROP TABLE IF EXISTS `site_verification_list_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_verification_list_item` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `value` varchar(64) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `site_verification_list_item_user_id_foreign` (`user_id`),
  CONSTRAINT `site_verification_list_item_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=751 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_verification_list_item`
--

LOCK TABLES `site_verification_list_item` WRITE;
/*!40000 ALTER TABLE `site_verification_list_item` DISABLE KEYS */;
INSERT INTO `site_verification_list_item` VALUES (720,'https://www.google.com',NULL,NULL,NULL),(721,'https://www.google.com',NULL,NULL,NULL),(722,'https://www.youtube.com',NULL,NULL,NULL),(723,'https://www.github.com',NULL,NULL,NULL),(724,'https://www.google.com',NULL,NULL,NULL),(725,'https://www.google.com',NULL,NULL,NULL),(726,'https://www.google.com','2024-04-17 23:10:22','2024-04-17 23:10:22',567),(727,'https://www.google.com','2024-04-17 23:11:03','2024-04-17 23:11:03',567),(728,'https://www.google.com','2024-04-17 23:12:41','2024-04-17 23:12:41',567),(729,'https://www.google.com','2024-04-17 23:13:13','2024-04-17 23:13:13',567),(730,'https://www.youtube.com','2024-04-17 23:13:13','2024-04-17 23:13:13',567),(731,'https://www.github.com','2024-04-17 23:13:13','2024-04-17 23:13:13',567),(732,'https://www.globle.com','2024-04-17 23:18:45','2024-04-17 23:18:45',567),(733,'https://www.globle.com','2024-04-17 23:19:00','2024-04-17 23:19:00',567),(734,'https://www.globle2.com','2024-04-17 23:19:45','2024-04-17 23:19:45',567),(735,'https://www.globle3.com','2024-04-17 23:20:58','2024-04-17 23:20:58',567),(736,'https://www.google.com','2024-04-18 12:59:55','2024-04-18 12:59:55',569),(737,'https://www.youtube.com','2024-04-18 12:59:55','2024-04-18 12:59:55',569),(738,'https://www.github.com','2024-04-18 12:59:55','2024-04-18 12:59:55',569),(739,'vulndetector.ru','2024-04-20 06:25:44','2024-04-20 06:25:44',572),(740,'https://www.google.com','2024-04-20 11:31:10','2024-04-20 11:31:10',579),(741,'https://www.youtube.com','2024-04-20 11:31:29','2024-04-20 11:31:29',579),(742,'https://www.github.com','2024-04-20 11:31:29','2024-04-20 11:31:29',579),(743,'https://www.google.com','2024-04-24 23:37:34','2024-04-24 23:37:34',579),(744,'https://www.youtube.com','2024-04-24 23:37:35','2024-04-24 23:37:35',579),(745,'https://www.google.com','2024-04-24 23:43:45','2024-04-24 23:43:45',579),(746,'https://www.youtube.com','2024-04-24 23:43:45','2024-04-24 23:43:45',579),(747,'https://www.github.com','2024-04-24 23:43:45','2024-04-24 23:43:45',579),(748,'https://www.google.com','2024-04-24 23:43:45','2024-04-24 23:43:45',579),(749,'https://www.youtube.com','2024-04-24 23:43:45','2024-04-24 23:43:45',579),(750,'https://lk.ru','2024-04-24 23:43:46','2024-04-24 23:43:46',579);
/*!40000 ALTER TABLE `site_verification_list_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_documents`
--

DROP TABLE IF EXISTS `user_documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_documents` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `document_url` varchar(255) NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_documents_user_id_foreign` (`user_id`),
  CONSTRAINT `user_documents_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_documents`
--

LOCK TABLES `user_documents` WRITE;
/*!40000 ALTER TABLE `user_documents` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_vulnerability`
--

DROP TABLE IF EXISTS `user_vulnerability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_vulnerability` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `critical` int NOT NULL DEFAULT '0',
  `high` int NOT NULL DEFAULT '0',
  `middle` int NOT NULL DEFAULT '0',
  `low` int NOT NULL DEFAULT '0',
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_vulnerability_user_id_foreign` (`user_id`),
  CONSTRAINT `user_vulnerability_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4122 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_vulnerability`
--

LOCK TABLES `user_vulnerability` WRITE;
/*!40000 ALTER TABLE `user_vulnerability` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_vulnerability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `login` varchar(255) NOT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=580 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','qwerty@ya.ru',NULL,'admin',NULL,NULL,NULL,'admin',NULL,NULL),(562,NULL,'example@mail.ru',NULL,'pbkdf2_sha256$720000$wKoJhoclzgQaBjz0B3s8WM$FLDo/be0rzf8A4F4A1buRxbPc609hsxBZhRmXm+xu4M=',NULL,NULL,NULL,'MrTwister221221111',NULL,NULL),(563,NULL,'example2@mail.ru',NULL,'pbkdf2_sha256$720000$4GFtVePUnbFep8FqvlQ5BA$l+AtkLLNXir0goVHjyazfE4BtqZ5mO0eXKNSKMhZ3HY=',NULL,NULL,NULL,'MrTwister22122111121',NULL,NULL),(564,NULL,'example22@mail.com',NULL,'pbkdf2_sha256$720000$r4uzjGn5yiZ05tNLLIbzBW$Xf+oXQBmkCDAuw6ALwjfMQ0LeOhN+HrXgJ1x8nZz+00=',NULL,NULL,NULL,'User3',NULL,NULL),(565,NULL,'MrTwister1111@ya.ru',NULL,'pbkdf2_sha256$720000$MyPkf9xRRdCqh7qcGP8B6N$HuJQ7mGLUIo1P/i2D0B/4tx7wasqMPLMO1KvkYFV9M0=',NULL,NULL,NULL,'MrTwister1111',NULL,NULL),(566,NULL,'qwer@gmail.com',NULL,'pbkdf2_sha256$720000$JvNdbqNgnQ9A4mramOPB9e$G1OIiUj2BZiqTqCNgD1YWNVHNdosoMqQYc7xOpaCQko=',NULL,NULL,NULL,'User3242',NULL,NULL),(567,NULL,'qwe123@ya.ru',NULL,'pbkdf2_sha256$720000$c0e0W8NDVK8FsNC0yuANZW$zwvsAkhHHPgj/GHiZS47w2caO/9LxhjFPBYFraF/iIs=',NULL,NULL,NULL,'User123123112ds',NULL,NULL),(568,NULL,'MrTwister12@ya.ru',NULL,'pbkdf2_sha256$720000$87M6qmvK47PRj2I6Ma9E9l$JBjflMP5ZzW54TC2YUixGa0dETYEMnukZKgomKmba/E=',NULL,NULL,NULL,'MrTwister12',NULL,NULL),(569,NULL,'direct@freedom-imperial.ru',NULL,'pbkdf2_sha256$720000$pJJrOKK4KiQLM1dSXItD1u$HKON/KRsA1JNkwj5fZx+RggBhRAdxRRLZQjFeeIMFxc=',NULL,NULL,NULL,'Steven22571',NULL,NULL),(570,NULL,'123123123@mail.ru',NULL,'pbkdf2_sha256$720000$nLv7k5SnVov8p6aTf04bTO$CBKRzgmTiOFsr66ol2EwliaBj72dko+S2t6HTIV+oXw=',NULL,NULL,NULL,'User30',NULL,NULL),(571,NULL,'user40@mail.ru',NULL,'pbkdf2_sha256$720000$jtXgpgbEgt3Xgqo2fr0Mkd$DqjqkHLD0WcD2J7UAwmDp7DdZfczaGZMTFfZkBIzgOg=',NULL,NULL,NULL,'User40',NULL,NULL),(572,NULL,'vuln.detector@internet.ru',NULL,'pbkdf2_sha256$720000$dVv79JaPwpGD9OvXYuMTdD$n+MfCRhiGPPzOq54rCw4L2ELh9RCvYOH0q+mxmUeXZ4=',NULL,NULL,NULL,'Павел - Тест',NULL,NULL),(573,NULL,'',NULL,'pbkdf2_sha256$720000$eLNPKdA8IIDnk85XaKBbts$Y7f8p3ZLglMqluZqLMWywK2hHOCA2Ecj9N2ntpeDFCc=',NULL,NULL,NULL,'',NULL,NULL),(574,NULL,'picachu57@yandex.ru',NULL,'pbkdf2_sha256$720000$tIckLs3TsATtZGdu3PpgA1$BU41+v2ETcEZOgpYTDx+rszXFv5lFVpQFr1dEeSe3rY=','127.0.0.1/auth/emailAuth/xvwtoTJxdoIKGMSnUoRpmXOnj',NULL,NULL,'Steven22572',NULL,NULL),(575,NULL,'picachu51@yandex.ru',NULL,'pbkdf2_sha256$720000$ihMJ1vU8BHxd768NNcZ5M6$3r2OGqjv7qD+0JWm7utk1MC50EoXOAT+j3w5hI8WCz8=','127.0.0.1/auth/emailAuth/OTByZtmOWHWKjUQfQeGeyqxUH',NULL,NULL,'Steven22573',NULL,NULL),(576,NULL,'picachu17@yandex.ru',NULL,'pbkdf2_sha256$720000$YGZAkTp1pwh2tS37yXuDr6$25XXHUxTurrhl7wPpZI+w206oBXNUrPnk9aG8QA/a18=','127.0.0.1/auth/emailAuth/mRYDhRNASpyBSWENKVYJYqUNq',NULL,NULL,'Steven22575',NULL,NULL),(577,NULL,'picachu5@yandex.ru','2024-04-20 10:49:13','pbkdf2_sha256$720000$OwmtmqpTG2baaRq29QokcY$mU0EmT9m0XHZZ/wKRssY41kO+VKIb0eeYxXPulN4gUY=','127.0.0.1/auth/emailAuth/bkAbnbNkfsRCoLQVxTreDPIlg',NULL,NULL,'Steven22574',NULL,NULL),(578,NULL,'picachu7@yandex.ru','2024-04-20 11:24:17','pbkdf2_sha256$720000$5I0DrXUckXZbr5L8jreCOw$I872zlKpjpOxspBjXlYHaklatgARwc9GXvnCNmCAmQs=','127.0.0.1/auth/emailAuth/nrbYZaXLrfXxArgwKkVlNpAvg',NULL,NULL,'Steven22579',NULL,NULL),(579,NULL,'picachu517@yandex.ru','2024-04-20 11:27:10','pbkdf2_sha256$600000$WlEjru2QfFZsLhP7lCMYA9$UYyWBrzvesNqEiv1tc18jUeZUDfswwe1zxj2fVFmHTc=','127.0.0.1/auth/emailAuth/frpxNJQrhUndjjiciwSZRFAkm',NULL,NULL,'Steven22580',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `versions`
--

DROP TABLE IF EXISTS `versions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `versions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Baseversion` varchar(255) NOT NULL,
  `Freeversion` varchar(255) NOT NULL,
  `Prodversion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `versions`
--

LOCK TABLES `versions` WRITE;
/*!40000 ALTER TABLE `versions` DISABLE KEYS */;
/*!40000 ALTER TABLE `versions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-23 16:13:56
