-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: capritech
-- ------------------------------------------------------
-- Server version	8.0.46

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` tinyint NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `documentId` varchar(30) NOT NULL,
  `postJob` varchar(50) NOT NULL,
  `verifyEmail` tinyint DEFAULT '0',
  `active` tinyint DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `uuid` varchar(36) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'Tatiana','jeancarlostiqueloaiza148@gmail.com','123456','123456789','false',0,0,'2026-07-31 12:08:10','2026-07-31 12:08:10',''),(4,'juan carlos','jeancarlostiqueloaiza148@gmail.com','123456','123456789','false',0,0,'2026-07-31 12:08:44','2026-07-31 12:08:44',''),(5,'Tatiana capera','caperatatiana822@gmail.com','123456','123456789','false',0,0,'2026-07-31 13:08:15','2026-07-31 13:08:15',''),(12,'kelly','caperatatiana822@gmail.com','123ktcm','1111264361','false',0,0,'2026-08-03 16:08:24','2026-08-03 16:08:24',''),(13,'stefany','vasquezstefany182@gmail.com','1234hjdn','987623','false',0,0,'2026-08-03 16:34:28','2026-08-03 16:34:28',''),(14,'enbo ortiz','livestockadso@gmail.com','4634jhg','987653','false',0,0,'2026-08-03 16:35:54','2026-08-03 16:35:54',''),(15,'enbo ortiz','enbo98@hotmail.com','41234rulc','1479035','false',0,0,'2026-08-03 16:53:28','2026-08-03 16:53:28',''),(16,'Juan Perez','juan@ejemplo.com','123456','123456789','Administrador',0,0,'2026-08-18 01:45:40','2026-08-18 01:45:40','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-18 20:21:22
