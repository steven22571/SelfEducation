-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: vdlk
-- ------------------------------------------------------
-- Server version	8.0.36-alt1

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
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_notification`
--

LOCK TABLES `email_notification` WRITE;
/*!40000 ALTER TABLE `email_notification` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=265 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_notification_list_item`
--

LOCK TABLES `email_notification_list_item` WRITE;
/*!40000 ALTER TABLE `email_notification_list_item` DISABLE KEYS */;
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
INSERT INTO `immunity_general_statistic` VALUES (3968,'ИТ Иммунитет',100,'2024-04-13 16:17:06','2024-04-13 16:17:06',580),(3969,'ИТ Иммунитет',0,'2024-05-13 16:33:15','2024-05-13 16:33:15',580),(3970,'ИТ Иммунитет',49,'2024-06-13 16:33:15','2024-06-13 16:33:15',580),(3971,'ИТ Иммунитет',83,'2024-06-14 16:33:15','2024-06-14 16:33:15',580);
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
INSERT INTO `immunity_type_statistic` VALUES (79,'Домены',95,'2022-11-09 08:27:23','2022-11-09 08:27:23',580),(80,'Общие',69,'2022-11-09 08:27:38','2022-11-09 08:27:38',580),(83,'Сети',100,'2022-11-09 08:27:42','2022-11-09 08:27:42',580),(84,'Телефония',100,'2022-11-09 08:27:43','2022-11-09 08:27:43',580),(85,'Финансы',30,'2022-11-09 08:27:43','2022-11-09 08:27:43',580),(86,'Шлюзы',51,'2022-11-09 08:27:43','2022-11-09 08:27:43',580),(87,'Почта',63,'2022-11-09 08:27:43','2022-11-09 08:27:43',580),(88,'Разработка',77,'2022-11-09 08:27:43','2022-11-09 08:27:43',580),(89,'Данные',56,'2022-11-09 08:27:23','2022-11-09 08:27:23',572),(90,'Данные',70,'2022-11-09 08:27:23','2022-11-09 08:27:23',572),(91,'Данные',35,'2022-11-09 08:27:23','2022-11-09 08:27:23',572),(92,'Данные',80,'2022-11-09 08:27:23','2022-11-09 08:27:23',572),(93,'Данные',84,'2022-11-09 08:27:23','2022-11-09 08:27:23',572);
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
INSERT INTO `site_recommendation` VALUES (14,'РЕКОМЕНДОВАНО: выполнить','Перенести OpenSSH, внутрь периметра или закрыть VPN или закрыть файровлом. Не выполнение ведет к накоплению рисков потери контроля за ИТ системой','recommendation',580,'2022-12-01 19:01:34','2022-12-01 19:01:34');
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
INSERT INTO `site_threat_statistic` VALUES (1664510,'104.21.32.80','api.teleport.media','Открытый TCP','2',580,0.10,'2024-04-09 04:55:07','2024-04-09 04:55:07');
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
) ENGINE=InnoDB AUTO_INCREMENT=581 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','qwerty@ya.ru',NULL,'admin',NULL,NULL,NULL,'admin',NULL,NULL),(580,NULL,'','2024-05-23 15:28:56','pbkdf2_sha256$720000$lvKXVJi1MFgPJdUGMekt5E$grsdNpk7eb8qmpmrpDg0jvYG7fHgu0zZkSRPiNDnEOs=','http://127.0.0.1:8001/auth/emailAuth/HRAAWCViByxKhAwTyXDAhSJna',NULL,NULL,'manager',NULL,NULL);
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

-- Dump completed on 2024-05-31 13:14:24
