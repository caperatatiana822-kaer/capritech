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
-- Table structure for table `production`
--

DROP TABLE IF EXISTS `production`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `production` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` datetime NOT NULL,
  `descripcionElemento` varchar(200) NOT NULL,
  `unidadMedida` varchar(50) NOT NULL,
  `cantidad` varchar(50) NOT NULL,
  `valorUnitario` varchar(50) NOT NULL,
  `valorTotal` varchar(50) NOT NULL,
  `fechaVencimiento` datetime NOT NULL,
  `centroCosto` varchar(100) NOT NULL,
  `nombreTraslada` varchar(50) NOT NULL,
  `nombreRecibe` varchar(50) NOT NULL,
  `instructorTecnico` varchar(50) NOT NULL,
  `observaciones` varchar(100) NOT NULL,
  `productionType` varchar(255) NOT NULL DEFAULT 'carne',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `production`
--

LOCK TABLES `production` WRITE;
/*!40000 ALTER TABLE `production` DISABLE KEYS */;
INSERT INTO `production` VALUES (1,'2026-07-13 00:00:00','leche de cabra','militros','10ml','12000','20000','2026-03-30 00:00:00','senaempresa','andres','camilo','sandra','ninguna','carne'),(2,'2026-07-13 00:00:00','leche de cabra','mililitros','10','12000','20000','2026-03-30 00:00:00','senaempresa','sebastian','camilo','sandra','ninguna','carne'),(3,'2025-12-03 05:00:00','leche de cabra','litros','10','3000','30000','2025-12-05 05:00:00','la granja','andres','merca sena','sandra forero','ninguna','carne'),(4,'2026-08-03 00:00:00','leche de cabra','litros','4','3000','12000','2026-08-05 00:00:00','la granja','andres','merca sena ','sandra forero','ninguna','leche'),(5,'2026-08-04 00:00:00','leche de cabra','litros','5','2000','10000','2026-08-07 00:00:00','sena','sebastian','tania','sandra','ninguna','leche');
/*!40000 ALTER TABLE `production` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-18 20:21:21
