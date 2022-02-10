# tarjetasPresentacion
 
# SYSCOM Expo 2022

<h3>Base de datos</h3>
CREATE DATABASE `otros` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
<br><br>

CREATE TABLE tarjetas (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(45) DEFAULT NULL,
  correo varchar(45) DEFAULT NULL,
  puesto_cargo varchar(55) DEFAULT NULL,
  url_empresa varchar(45) DEFAULT NULL,
  empresa varchar(30) DEFAULT NULL,
  celular varchar(15) DEFAULT NULL,
  qr_card varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;