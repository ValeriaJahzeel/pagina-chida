-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: cursosia
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `idcurso` int NOT NULL AUTO_INCREMENT,
  `nombreCurso` varchar(100) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `precio` int NOT NULL,
  `numAlumnos` int NOT NULL,
  PRIMARY KEY (`idcurso`),
  KEY `autorfk_idx` (`autor`),
  CONSTRAINT `autorfk` FOREIGN KEY (`autor`) REFERENCES `usuario` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (1,'Curso Completo de Desarrollo Web 2003 Bootcamp','johnatanprof@gmail.com',180,30),(2,'Tecnicas de Inteligencia Artificial','jordanp@gmail.com',200,30),(3,'Spain AI Acelerador de Talento','camposmanuel@gmail.com',150,20),(5,'Curso Fundamentos de IA','johnatanprof@gmail.com',200,50);
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursousuario`
--

DROP TABLE IF EXISTS `cursousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cursousuario` (
  `curso` int NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `usuariofk_idx` (`usuario`),
  KEY `cursofk_idx` (`curso`),
  CONSTRAINT `cursofk` FOREIGN KEY (`curso`) REFERENCES `curso` (`idcurso`),
  CONSTRAINT `usuariofk` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursousuario`
--

LOCK TABLES `cursousuario` WRITE;
/*!40000 ALTER TABLE `cursousuario` DISABLE KEYS */;
INSERT INTO `cursousuario` VALUES (3,'navil@gmail.com',38),(3,'navil@gmail.com',39);
/*!40000 ALTER TABLE `cursousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `correo` varchar(100) NOT NULL,
  `nombreUsuario` varchar(100) NOT NULL,
  `tipoUsuario` varchar(50) NOT NULL,
  `contraseña` varchar(10) NOT NULL,
  `cursos` int DEFAULT NULL,
  PRIMARY KEY (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('camposmanuel@gmail.com','Manuel Campos','profesor','123456',1),('johnatanprof@gmail.com','Johnatan Jimenez','profesor','123456',1),('jordanp@gmail.com','Pedro Jordan','profesor','123456',1),('navil@gmail.com','Navil Pineda','usuario','123456',0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-13 15:00:56
