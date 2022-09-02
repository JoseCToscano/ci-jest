import {MigrationInterface, QueryRunner} from "typeorm";

export class RefactorFlowFormulario1608568511206 implements MigrationInterface {
    name = 'RefactorFlowFormulario1608568511206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `solicitudes` ADD `stepFormulario` tinyint NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_2e0112cc0d65204cdc4aaae8bb5`");
        await queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_2e04d8756660683a03bf4a72006`");
        await queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_b2754c29b38bc3b43cd6a2de2b4`");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `nombre` `nombre` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `apellidoPaterno` `apellidoPaterno` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `email` `email` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `telefono` `telefono` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `curp` `curp` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `fechaNacimiento` `fechaNacimiento` date NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `genero` `genero` int NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `estadoCivil` `estadoCivil` int NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `nivelEstudio` `nivelEstudio` int NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `dependientesEconomicos` `dependientesEconomicos` int NULL");
        await queryRunner.query("ALTER TABLE `datosFinancieros` DROP FOREIGN KEY `FK_6cc621104d09968b63a879bdfab`");
        await queryRunner.query("ALTER TABLE `datosFinancieros` CHANGE `fuenteIngresos` `fuenteIngresos` int NULL");
        await queryRunner.query("ALTER TABLE `datosFinancieros` CHANGE `antiguedadIngresos` `antiguedadIngresos` int NULL");
        await queryRunner.query("ALTER TABLE `datosFinancieros` CHANGE `ingresosMensuales` `ingresosMensuales` double NULL");
        await queryRunner.query("ALTER TABLE `domicilios` DROP FOREIGN KEY `FK_c15f34919f327c8617b68f03ef7`");
        await queryRunner.query("ALTER TABLE `domicilios` DROP FOREIGN KEY `FK_2cad38090ec9548b95f6f409943`");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `tipoDomicilio` `tipoDomicilio` int NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `aniosAntiguedad` `aniosAntiguedad` int NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `estado` `estado` int NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `municipio` `municipio` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `calle` `calle` varchar(120) NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `numeroExterior` `numeroExterior` varchar(20) NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `codigoPostal` `codigoPostal` varchar(6) NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `colonia` `colonia` varchar(61) NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_7fc049ae97cef89738b6b75c290`");
        await queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_4681377d397cbbd4060caa91fed`");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `comercio` `comercio` int NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `sucursal` `sucursal` int NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `numeroPagos` `numeroPagos` int NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `montoSolicitado` `montoSolicitado` double NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `paraQuienProducto` `paraQuienProducto` int NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `descripcion` `descripcion` tinytext NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `importanciaCiclismo` `importanciaCiclismo` int NULL");
        await queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_2e04d8756660683a03bf4a72006` FOREIGN KEY (`estadoCivil`) REFERENCES `staticEstadosCiviles`(`idEstadoCivil`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_2e0112cc0d65204cdc4aaae8bb5` FOREIGN KEY (`genero`) REFERENCES `staticGeneros`(`idGenero`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_b2754c29b38bc3b43cd6a2de2b4` FOREIGN KEY (`nivelEstudio`) REFERENCES `staticNivelesEstudios`(`idNivelEstudio`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `datosFinancieros` ADD CONSTRAINT `FK_6cc621104d09968b63a879bdfab` FOREIGN KEY (`fuenteIngresos`) REFERENCES `staticTiposIngresos`(`idTipoIngreso`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `domicilios` ADD CONSTRAINT `FK_2cad38090ec9548b95f6f409943` FOREIGN KEY (`estado`) REFERENCES `staticEstadosMexico`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `domicilios` ADD CONSTRAINT `FK_c15f34919f327c8617b68f03ef7` FOREIGN KEY (`tipoDomicilio`) REFERENCES `staticTiposDomicilios`(`idTipoDomicilio`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_7fc049ae97cef89738b6b75c290` FOREIGN KEY (`comercio`) REFERENCES `comercios`(`idComercio`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_4681377d397cbbd4060caa91fed` FOREIGN KEY (`sucursal`) REFERENCES `sucursales`(`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `solicitudes` DROP COLUMN `stepFormulario`");
        await queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_4681377d397cbbd4060caa91fed`");
        await queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_7fc049ae97cef89738b6b75c290`");
        await queryRunner.query("ALTER TABLE `domicilios` DROP FOREIGN KEY `FK_c15f34919f327c8617b68f03ef7`");
        await queryRunner.query("ALTER TABLE `domicilios` DROP FOREIGN KEY `FK_2cad38090ec9548b95f6f409943`");
        await queryRunner.query("ALTER TABLE `datosFinancieros` DROP FOREIGN KEY `FK_6cc621104d09968b63a879bdfab`");
        await queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_b2754c29b38bc3b43cd6a2de2b4`");
        await queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_2e0112cc0d65204cdc4aaae8bb5`");
        await queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_2e04d8756660683a03bf4a72006`");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `importanciaCiclismo` `importanciaCiclismo` int NOT NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `descripcion` `descripcion` tinytext NOT NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `paraQuienProducto` `paraQuienProducto` int NOT NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `montoSolicitado` `montoSolicitado` double NOT NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `numeroPagos` `numeroPagos` int NOT NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `sucursal` `sucursal` int NOT NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` CHANGE `comercio` `comercio` int NOT NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_4681377d397cbbd4060caa91fed` FOREIGN KEY (`sucursal`) REFERENCES `sucursales`(`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_7fc049ae97cef89738b6b75c290` FOREIGN KEY (`comercio`) REFERENCES `comercios`(`idComercio`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `colonia` `colonia` varchar(61) NOT NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `codigoPostal` `codigoPostal` varchar(6) NOT NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `numeroExterior` `numeroExterior` varchar(20) NOT NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `calle` `calle` varchar(120) NOT NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `municipio` `municipio` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `estado` `estado` int NOT NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `aniosAntiguedad` `aniosAntiguedad` int NOT NULL");
        await queryRunner.query("ALTER TABLE `domicilios` CHANGE `tipoDomicilio` `tipoDomicilio` int NOT NULL");
        await queryRunner.query("ALTER TABLE `domicilios` ADD CONSTRAINT `FK_2cad38090ec9548b95f6f409943` FOREIGN KEY (`estado`) REFERENCES `staticEstadosMexico`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `domicilios` ADD CONSTRAINT `FK_c15f34919f327c8617b68f03ef7` FOREIGN KEY (`tipoDomicilio`) REFERENCES `staticTiposDomicilios`(`idTipoDomicilio`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `datosFinancieros` CHANGE `ingresosMensuales` `ingresosMensuales` double NOT NULL");
        await queryRunner.query("ALTER TABLE `datosFinancieros` CHANGE `antiguedadIngresos` `antiguedadIngresos` int NOT NULL");
        await queryRunner.query("ALTER TABLE `datosFinancieros` CHANGE `fuenteIngresos` `fuenteIngresos` int NOT NULL");
        await queryRunner.query("ALTER TABLE `datosFinancieros` ADD CONSTRAINT `FK_6cc621104d09968b63a879bdfab` FOREIGN KEY (`fuenteIngresos`) REFERENCES `staticTiposIngresos`(`idTipoIngreso`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `dependientesEconomicos` `dependientesEconomicos` int NOT NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `nivelEstudio` `nivelEstudio` int NOT NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `estadoCivil` `estadoCivil` int NOT NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `genero` `genero` int NOT NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `fechaNacimiento` `fechaNacimiento` date NOT NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `curp` `curp` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `telefono` `telefono` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `email` `email` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `apellidoPaterno` `apellidoPaterno` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `usuarios` CHANGE `nombre` `nombre` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_b2754c29b38bc3b43cd6a2de2b4` FOREIGN KEY (`nivelEstudio`) REFERENCES `staticNivelesEstudios`(`idNivelEstudio`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_2e04d8756660683a03bf4a72006` FOREIGN KEY (`estadoCivil`) REFERENCES `staticEstadosCiviles`(`idEstadoCivil`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_2e0112cc0d65204cdc4aaae8bb5` FOREIGN KEY (`genero`) REFERENCES `staticGeneros`(`idGenero`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}