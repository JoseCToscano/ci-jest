"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablasV2Completas1597452569078 = void 0;
var TablasV2Completas1597452569078 = /** @class */ (function () {
    function TablasV2Completas1597452569078() {
        this.name = "TablasV2Completas1597452569078";
    }
    TablasV2Completas1597452569078.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoFrecuenciaPago` (`clave` varchar(2) NOT NULL, `descripcion` varchar(80) NOT NULL, PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoPrevencion` (`clave` varchar(2) NOT NULL, `descripcion` varchar(300) NOT NULL, PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoTipoCuenta` (`clave` varchar(1) NOT NULL, `descripcion` varchar(70) NOT NULL, PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCreditos` (`idCredito` int NOT NULL AUTO_INCREMENT, `idReporte` int NOT NULL, `fechaActualizacion` varchar(20) NULL, `registroImpugnado` int NULL, `claveOtorgante` varchar(10) NULL, `nombreOtorgante` varchar(40) NULL, `cuentaActual` varchar(25) NULL, `tipoResponsabilidad` varchar(1) NULL, `tipoCuenta` varchar(1) NULL, `tipoCredito` varchar(2) NULL, `claveUnidadMonetaria` varchar(2) NULL, `valorActivoValuacion` int NULL, `numeroPagos` int NULL, `frecuenciaPagos` varchar(1) NULL, `montoPagar` double NULL, `fechaAperturaCuenta` varchar(20) NULL, `fechaUltimoPago` varchar(20) NULL, `fechaUltimaCompra` varchar(20) NULL, `fechaCierreCuenta` varchar(20) NULL, `fechaReporte` varchar(20) NULL, `ultimaFechaSaldoCero` varchar(20) NULL, `garantia` varchar(100) NULL, `creditoMaximo` double NULL, `saldoActual` double NULL, `limiteCredito` double NULL, `saldoVencido` double NULL, `numeroPagosVencidos` int NULL, `pagoActual` varchar(45) NULL, `historicoPagos` varchar(100) NULL, `fechaRecienteHistoricoPagos` varchar(20) NULL, `fechaAntiguaHistoricoPagos` varchar(20) NULL, `clavePrevencion` varchar(2) NULL, `totalPagosReportados` int NULL, `peorAtraso` double NULL, `fechaPeorAtraso` varchar(20) NULL, `saldoVencidoPeorAtraso` double NULL, `montoUltimoPago` double NULL, `idDomicilio` varchar(45) NULL, `servicios` varchar(1) NULL, `identificadorCAN` varchar(2) NULL, `prelacionOrigenCAN` int NULL, `prelacionActualCAN` int NULL, `fechaAperturaCAN` varchar(20) NULL, `fechaCancelacionCAN` varchar(20) NULL, `historicoCAN` varchar(20) NULL, `fechaMRCAN` varchar(20) NULL, `fechaMACAN` varchar(20) NULL, INDEX `ccCreditos_ccReportes_idx` (`idReporte`), INDEX `ccCreditos_ccCatalogoTipoCuenta_idx` (`tipoCuenta`), INDEX `ccCreditos_ccCatalogoTipoCredito_idx` (`tipoCredito`), INDEX `ccCreditos_ccCatalogoPrevencion_idx` (`clavePrevencion`), INDEX `ccCreditos_ccCatalogoFrecuenciaPago_idx` (`frecuenciaPagos`), PRIMARY KEY (`idCredito`)) ENGINE=InnoDB")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoTipoCredito` (`clave` varchar(2) NOT NULL, `descripcion` varchar(100) NOT NULL, PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccConsultas` (`idConsulta` int NOT NULL AUTO_INCREMENT, `idReporte` int NOT NULL, `fechaConsulta` varchar(20) NULL, `claveOtorgante` varchar(10) NULL, `nombreOtorgante` varchar(40) NULL, `direccionOtorgante` varchar(80) NULL, `telefonoOtorgante` varchar(20) NULL, `tipoCredito` varchar(5) NULL, `claveUnidadMonetaria` varchar(2) NULL, `importeCredito` double NULL, `tipoResponsabilidad` varchar(1) NULL, `idDomicilio` varchar(20) NULL, `servicios` varchar(1) NULL, INDEX `ccConsultas_ccReportes_idx` (`idReporte`), INDEX `ccConsultas_ccCatalogoTipoCuenta_idx` (`tipoCredito`), INDEX `ccConsultas_ccCatalogoTipoCredito_idx` (`tipoCredito`), PRIMARY KEY (`idConsulta`)) ENGINE=InnoDB")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccDomicilios` (`idDomicilio` int NOT NULL AUTO_INCREMENT, `idReporte` int NOT NULL, `direccion` varchar(85) NULL, `coloniaPoblacion` varchar(65) NULL, `delegacionMunicipio` varchar(65) NULL, `ciudad` varchar(65) NULL, `estado` varchar(4) NULL, `CP` varchar(5) NULL, `fechaResidencia` varchar(20) NULL, `numeroTelefono` varchar(20) NULL, `tipoDomicilio` varchar(1) NULL, `tipoAsentamiento` varchar(3) NULL, `fechaRegistroDomicilio` varchar(20) NULL, `tipoAltaDomicilio` int NULL, `numeroOtorgantesCarga` int NULL, `numeroOtorgantesConsulta` int NULL, `idDomicilioCC` varchar(45) NULL, INDEX `ccDomicilios_ccReportes_idx` (`idReporte`), PRIMARY KEY (`idDomicilio`)) ENGINE=InnoDB")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccEmpleos` (`idEmpleo` int NOT NULL AUTO_INCREMENT, `idReporte` int NOT NULL, `nombreEmpresa` varchar(40) NULL, `direccion` varchar(80) NULL, `coloniaPoblacion` varchar(65) NULL, `delegacionMunicipio` varchar(65) NULL, `ciudad` varchar(65) NULL, `estado` varchar(4) NULL, `CP` varchar(5) NULL, `numeroTelefono` varchar(20) NULL, `extension` varchar(8) NULL, `fax` varchar(20) NULL, `puesto` varchar(60) NULL, `fechaContratacion` varchar(20) NULL, `claveMoneda` varchar(2) NULL, `salarioMensual` double NULL, `fechaUltimoDiaEmpleo` varchar(20) NULL, `fechaVerificacionEmpleo` varchar(20) NULL, INDEX `ccEmpleos_ccReportes_idx` (`idReporte`), PRIMARY KEY (`idEmpleo`)) ENGINE=InnoDB")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccMensajes` (`idMensaje` int NOT NULL AUTO_INCREMENT, `idReporte` int NOT NULL, `tipoMensaje` int NULL, `leyenda` varchar(100) NULL, INDEX `ccMensajes_ccReportes_idx` (`idReporte`), PRIMARY KEY (`idMensaje`)) ENGINE=InnoDB")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccPersonas` (`idPersona` int NOT NULL AUTO_INCREMENT, `idReporte` int NOT NULL, `apellidoPaterno` varchar(30) NULL, `apellidoMaterno` varchar(30) NULL, `apellidoAdicional` varchar(30) NULL, `nombres` varchar(50) NULL, `fechaNacimiento` varchar(20) NULL, `RFC` varchar(10) NULL, `CURP` varchar(18) NULL, `numeroSeguridadSocial` varchar(11) NULL, `nacionalidad` varchar(2) NULL, `residencia` int NULL, `estadoCivil` varchar(1) NULL, `sexo` varchar(1) NULL, `claveElectorIFE` varchar(20) NULL, `numeroDependientes` int NULL, `fechaDefuncion` varchar(20) NULL, INDEX `ccPersona_ccConsultas_idx` (`idReporte`), PRIMARY KEY (`idPersona`)) ENGINE=InnoDB")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccScoresFicoExpress` (`idScore` int NOT NULL AUTO_INCREMENT, `nombreScore` varchar(45) NULL, `valor` int NULL, `folioConsulta` varchar(45) NULL, `fechaConsulta` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`idScore`)) ENGINE=InnoDB")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccRazonesFicoExpress` (`idRazon` int NOT NULL AUTO_INCREMENT, `idScore` int NOT NULL, `razon` varchar(3) NOT NULL, INDEX `ccRazones_ccScores_idx` (`idScore`), INDEX `ccRazones_ccCatalogoRazones_idx` (`razon`), PRIMARY KEY (`idRazon`)) ENGINE=InnoDB")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoRazones` (`clave` varchar(2) NOT NULL, `descripcion` varchar(300) NOT NULL, UNIQUE INDEX `clave_UNIQUE` (`clave`), PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccScores` (`idScore` int NOT NULL AUTO_INCREMENT, `idReporte` int NOT NULL, `nombreScore` varchar(45) NULL, `valor` int NULL, INDEX `ccScores_ccReportes_idx` (`idReporte`), PRIMARY KEY (`idScore`)) ENGINE=InnoDB")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccRazones` (`idRazon` int NOT NULL AUTO_INCREMENT, `idReporte` int NOT NULL, `idScore` int NOT NULL, `razon` varchar(3) NOT NULL, INDEX `ccRazones_ccScores_idx` (`idScore`), INDEX `ccRazones_ccReportes_idx` (`idReporte`), INDEX `ccRazones_ccCatalogoRazones_idx` (`razon`), PRIMARY KEY (`idRazon`)) ENGINE=InnoDB")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccReportes` (`idReporte` int NOT NULL AUTO_INCREMENT, `idSolicitud` int NOT NULL, `folioConsulta` varchar(20) NULL, `folioConsultaOtorgante` varchar(20) NULL, `claveOtorgante` varchar(20) NULL, `declaracionesConsumidor` varchar(100) NULL, `FechaDeCreacion` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, INDEX `ccConsulta_idSolicitud_idx` (`idSolicitud`), PRIMARY KEY (`idReporte`)) ENGINE=InnoDB")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `numeroDePagosPorComercio` (`idNumeroDePagos` int NOT NULL AUTO_INCREMENT, `numeroDePagos` int NOT NULL, `comercio` int NOT NULL, `activo` tinyint NULL DEFAULT '1', INDEX `comercio_idx` (`comercio`), PRIMARY KEY (`idNumeroDePagos`)) ENGINE=InnoDB")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `partners` (`idPartner` int NOT NULL AUTO_INCREMENT, `sucursal` int NOT NULL, `username` varchar(45) NOT NULL, `password` varchar(200) NOT NULL, `fechaCreacion` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, INDEX `partner_idx` (`sucursal`), PRIMARY KEY (`idPartner`)) ENGINE=InnoDB")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `sucursales` (`idSucursal` int NOT NULL AUTO_INCREMENT, `nombre` varchar(45) NOT NULL, `comercio` int NOT NULL, `fechaCreacion` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `activo` tinyint NOT NULL DEFAULT '1', `email` varchar(60) NULL, `celular` varchar(15) NULL, INDEX `sucursales_comercios_idx` (`comercio`), PRIMARY KEY (`idSucursal`)) ENGINE=InnoDB")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `comercios` (`idComercio` int NOT NULL AUTO_INCREMENT, `nombre` varchar(45) NOT NULL, `razonSocial` varchar(120) NOT NULL, `activo` tinyint NOT NULL DEFAULT '1', `fechaCreación` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `email` varchar(60) NULL, `celular` varchar(15) NULL, `comisionSinIva` float NOT NULL DEFAULT '0', `esquemaDePago` varchar(45) NULL, `tasaDeInteresPactada` varchar(45) NULL, UNIQUE INDEX `nombre_UNIQUE` (`nombre`), UNIQUE INDEX `IDX_b43a455bfcbcb3c49cbd68f6df` (`nombre`), PRIMARY KEY (`idComercio`)) ENGINE=InnoDB")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticEstadosSolicitudes` (`idEstadoSolicitud` int NOT NULL AUTO_INCREMENT, `estadoSolicitud` varchar(45) NOT NULL, `activo` tinyint NOT NULL DEFAULT '1', `visibleParaPartners` tinyint NOT NULL DEFAULT '0', `nombreParaPartners` varchar(45) NULL, `descripcion` varchar(300) NULL, PRIMARY KEY (`idEstadoSolicitud`)) ENGINE=InnoDB")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `variablesAlternativas` (`idVariablesAlternativas` int NOT NULL AUTO_INCREMENT, `idSolicitud` int NOT NULL, `ipUsuario` varchar(45) NULL, `city` varchar(45) NULL, `region` varchar(45) NULL, `regionCode` varchar(45) NULL, `country` varchar(45) NULL, `countryCode` varchar(45) NULL, `countryCodeIso3` varchar(45) NULL, `country_capital` varchar(45) NULL, `countryTld` varchar(45) NULL, `countryName` varchar(45) NULL, `continentCode` varchar(45) NULL, `inUSA` tinyint NULL, `codigoPostal` varchar(45) NULL, `latitude` double NULL, `longitude` double NULL, `timezone` varchar(45) NULL, `utcOffset` varchar(45) NULL, `countryCallingCode` varchar(10) NULL, `currency` varchar(10) NULL, `currencyName` varchar(45) NULL, `languages` varchar(45) NULL, `countryArea` double NULL, `countryPopulation` double NULL, `asn` varchar(45) NULL, `org` varchar(100) NULL, `anchoPantalla` double NULL, `altoPantalla` double NULL, `navegador` varchar(45) NULL, `navegadorVersion` varchar(45) NULL, `sistemaOperativo` varchar(45) NULL, `sistemaOperativoVersion` varchar(45) NULL, INDEX `idSolicitud_idx` (`idSolicitud`), PRIMARY KEY (`idVariablesAlternativas`)) ENGINE=InnoDB")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `opcionesDeOferta` (`idOpcionDeOferta` int NOT NULL AUTO_INCREMENT, `idSolicitud` int NOT NULL, `montoMaximo` double NOT NULL, `montoMinimo` double NOT NULL, `montoDefault` double NOT NULL, `plazo1` int NOT NULL, `plazo2` int NOT NULL, `plazoDefault` int NOT NULL, `notasAdicionales` tinytext NULL, `fechaPrimerPago` tinytext NOT NULL, `tasaInteresAnual` double NOT NULL, `fechaDeOferta` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `interesesMoratorios` double NOT NULL, `comercio` int NOT NULL, `sucursal` int NOT NULL, `quincenal` int NOT NULL, `tipoDePrestamo` int NOT NULL DEFAULT '1', INDEX `opcionesDeOferta_tipoDePrestamo_idx` (`tipoDePrestamo`), PRIMARY KEY (`idOpcionDeOferta`)) ENGINE=InnoDB")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticTiposDePrestamos` (`idTipoDePrestamo` int NOT NULL AUTO_INCREMENT, `tipoDePrestamo` varchar(45) NOT NULL, PRIMARY KEY (`idTipoDePrestamo`)) ENGINE=InnoDB")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticEstadosCreditos` (`idEstadoCredito` int NOT NULL AUTO_INCREMENT, `estadoCredito` varchar(25) NOT NULL, `activo` tinyint(1) NOT NULL DEFAULT '1', PRIMARY KEY (`idEstadoCredito`)) ENGINE=InnoDB")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticEstadosCiviles` (`idEstadoCivil` int NOT NULL AUTO_INCREMENT, `estadoCivil` varchar(45) NOT NULL, `activo` tinyint NOT NULL DEFAULT '1', PRIMARY KEY (`idEstadoCivil`)) ENGINE=InnoDB")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticGeneros` (`idGenero` int NOT NULL AUTO_INCREMENT, `genero` varchar(45) NOT NULL, `activo` tinyint NOT NULL DEFAULT '1', PRIMARY KEY (`idGenero`)) ENGINE=InnoDB")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticNivelesEstudios` (`idNivelEstudio` int NOT NULL AUTO_INCREMENT, `nivelEstudio` varchar(45) NOT NULL, `activo` tinyint NOT NULL DEFAULT '1', PRIMARY KEY (`idNivelEstudio`)) ENGINE=InnoDB")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `usuarios` (`idUsuario` int NOT NULL AUTO_INCREMENT, `nombre` varchar(45) NOT NULL, `segundoNombre` varchar(45) NULL, `apellidoPaterno` varchar(45) NOT NULL, `apellidoMaterno` varchar(45) NULL, `email` varchar(45) NOT NULL, `telefono` varchar(45) NOT NULL, `curp` varchar(45) NOT NULL, `fechaNacimiento` date NOT NULL, `genero` int NOT NULL, `estadoCivil` int NOT NULL, `activo` tinyint NOT NULL DEFAULT '1', `fechaCreacion` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `nivelEstudio` int NOT NULL, `dependientesEconomicos` int NOT NULL, `telefonoAlternativo` varchar(20) NULL, INDEX `nivelEstudio_idx` (`nivelEstudio`), INDEX `genero_idx` (`genero`), INDEX `estadoCivil_idx` (`estadoCivil`), PRIMARY KEY (`idUsuario`)) ENGINE=InnoDB")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `creditos` (`idCredito` int NOT NULL AUTO_INCREMENT, `usuario` int NOT NULL, `estadoCredito` int NOT NULL DEFAULT '1', `numeroContratoFirmado` int NOT NULL, `fechaPrimerPago` datetime(0) NOT NULL, `tasaDeInteres` float NOT NULL, `interesMoratorio` float NOT NULL, `CAT` float NOT NULL, `montoOtorgado` double NOT NULL, `numeroTotalDePagos` int NOT NULL, `numeroActualDePago` int NOT NULL DEFAULT '1', `saldoInsoluto` double NOT NULL, `pagoFijo` double NOT NULL, `solicitud` int NOT NULL, `activo` tinyint(1) NOT NULL DEFAULT '1', `quincenal` tinyint(1) NOT NULL, `productoEntregado` tinyint(1) NOT NULL DEFAULT '0', `personaQuienEntrego` varchar(45) NULL, `descripcionProductoEntregado` varchar(200) NULL, `comisionAtrato` tinyint(1) NULL DEFAULT '1', `tipoDePrestamo` int NOT NULL DEFAULT '1', `clabeCliente` varchar(18) NULL, `desembolsado` tinyint(1) NOT NULL DEFAULT '0', INDEX `usuarios_idx` (`usuario`), INDEX `staticEstadosCreditos_idx` (`estadoCredito`), INDEX `numeroDocumento_idx` (`numeroContratoFirmado`), INDEX `creditos_tipoDePrestamo_idx` (`tipoDePrestamo`), PRIMARY KEY (`idCredito`)) ENGINE=InnoDB")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticTiposDocumentos` (`idTipoDocumentos` int NOT NULL AUTO_INCREMENT, `tipo` varchar(45) NOT NULL, PRIMARY KEY (`idTipoDocumentos`)) ENGINE=InnoDB")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `documentosUsuarios` (`idDocs` int NOT NULL AUTO_INCREMENT, `idSolicitud` int NOT NULL, `dateCreated` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `s3Key` varchar(300) NOT NULL, `tipoDocumento` int NOT NULL, INDEX `tipoDocumentosDocs_idx` (`tipoDocumento`), INDEX `solicitudDocumento_idx` (`idSolicitud`), PRIMARY KEY (`idDocs`)) ENGINE=InnoDB")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `firmas` (`idFirma` int NOT NULL AUTO_INCREMENT, `idDoc` int NOT NULL, `idSolicitud` int NOT NULL, `fechaYhora` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, INDEX `idSolicitudEnFirmas_idx` (`idSolicitud`), INDEX `idDocumentoEnFirmas_idx` (`idDoc`), PRIMARY KEY (`idFirma`)) ENGINE=InnoDB")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `autenticacion` (`solicitud` int NOT NULL, `nip` varchar(4) NOT NULL, `intentosRestantes` int NOT NULL DEFAULT '3', `activo` tinyint NOT NULL DEFAULT '1', UNIQUE INDEX `REL_5b813d9e4fd0f6f217ef323c15` (`solicitud`), PRIMARY KEY (`solicitud`)) ENGINE=InnoDB")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticTiposIngresos` (`idTipoIngreso` int NOT NULL AUTO_INCREMENT, `tipoIngreso` varchar(45) NOT NULL, `activo` tinyint NOT NULL DEFAULT '1', PRIMARY KEY (`idTipoIngreso`)) ENGINE=InnoDB")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `datosFinancieros` (`idDatosFinancieros` int NOT NULL AUTO_INCREMENT, `solicitud` int NOT NULL, `fuenteIngresos` int NOT NULL, `antiguedadIngresos` int NOT NULL, `nombreComercial` varchar(100) NULL, `ingresosMensuales` double NOT NULL, `gastosMensuales` double NULL, INDEX `solicitudEnDatosFinancieros_idx` (`solicitud`), INDEX `fuenteIngresos_idx` (`fuenteIngresos`), PRIMARY KEY (`idDatosFinancieros`)) ENGINE=InnoDB")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticMunicipios` (`idMunicipio` int NOT NULL AUTO_INCREMENT, `nombreMunicipio` varchar(60) NOT NULL, `estado` int NOT NULL, `ciudad` int NULL, INDEX `staticMunicipios_estadomexico_idx` (`estado`), INDEX `staticMunicipios_Ciudad_idx` (`ciudad`), PRIMARY KEY (`idMunicipio`)) ENGINE=InnoDB")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticColonias` (`idColonia` int NOT NULL AUTO_INCREMENT, `nombreColonia` varchar(60) NOT NULL, `municipio` int NULL, `ciudad` int NULL, `estado` int NOT NULL, `codigoPostal` varchar(5) NOT NULL, INDEX `colonias_municipio_idx` (`municipio`), INDEX `colonias_estado_idx` (`estado`), INDEX `colonias_codigosPostales_idx` (`codigoPostal`), INDEX `colonias_ciudad_idx` (`ciudad`), PRIMARY KEY (`idColonia`)) ENGINE=InnoDB")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticCiudades` (`idCiudad` int NOT NULL AUTO_INCREMENT, `nombreCiudad` varchar(60) NOT NULL, `estado` int NOT NULL, INDEX `staticCiudades_estadosMexico_idx` (`estado`), PRIMARY KEY (`idCiudad`)) ENGINE=InnoDB")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticCodigosPostales` (`codigoPostal` varchar(5) NOT NULL, `estadoMexico` int NOT NULL, `ciudad` int NULL, `municipio` int NULL, UNIQUE INDEX `codigoPostal_UNIQUE` (`codigoPostal`), INDEX `codigoPostal_municipios_idx` (`municipio`), INDEX `codigoPostal_estadoMexico_idx` (`estadoMexico`), INDEX `codigoPostal_ciudades_idx` (`ciudad`), PRIMARY KEY (`codigoPostal`)) ENGINE=InnoDB")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticEstadosMexico` (`idEstado` int NOT NULL AUTO_INCREMENT, `estado` varchar(45) NOT NULL, `claveEstado` varchar(45) NOT NULL, PRIMARY KEY (`idEstado`)) ENGINE=InnoDB")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticTiposDomicilios` (`idTipoDomicilio` int NOT NULL AUTO_INCREMENT, `tipoDomicilio` varchar(45) NOT NULL, `activo` tinyint NOT NULL DEFAULT '1', PRIMARY KEY (`idTipoDomicilio`)) ENGINE=InnoDB")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `domicilios` (`idDomicilio` int NOT NULL AUTO_INCREMENT, `solicitud` int NOT NULL, `tipoDomicilio` int NOT NULL, `aniosAntiguedad` int NOT NULL, `estado` int NOT NULL, `municipio` varchar(45) NOT NULL, `calle` varchar(120) NOT NULL, `numeroExterior` varchar(20) NOT NULL, `numeroInterior` varchar(20) NULL, `codigoPostal` varchar(6) NOT NULL, `colonia` varchar(61) NOT NULL, `ciudad` varchar(61) NULL, INDEX `tipoDomicilio_idx` (`tipoDomicilio`), INDEX `solicitudEnDomicilios_idx` (`solicitud`), INDEX `estado_idx` (`estado`), PRIMARY KEY (`idDomicilio`)) ENGINE=InnoDB")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `documentosRequeridos` (`solicitud` int NOT NULL, `ineFront` tinyint(1) NULL DEFAULT '0', `ineBack` tinyint(1) NULL DEFAULT '0', `comprobanteDomicilio` tinyint(1) NULL DEFAULT '0', `comprobanteIngresos` tinyint(1) NULL DEFAULT '0', `selfie` tinyint(1) NULL DEFAULT '0', `activo` tinyint(1) NULL DEFAULT '1', `slackTimestampDocumentos` varchar(20) NULL, `feedback` varchar(500) NULL, `primeraRevision` tinyint(1) NULL DEFAULT '1', UNIQUE INDEX `REL_d026215adc1d35136b7d49cef8` (`solicitud`), PRIMARY KEY (`solicitud`)) ENGINE=InnoDB")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `oxxoPay` (`idOxxoPay` int NOT NULL AUTO_INCREMENT, `solicitud` int NOT NULL, `codigoReferencia` varchar(45) NOT NULL, `pagoMin` int NOT NULL, `pagoMax` int NOT NULL, `activo` tinyint NOT NULL DEFAULT '1', INDEX `solicitudOxxoPay_idx` (`solicitud`), PRIMARY KEY (`idOxxoPay`)) ENGINE=InnoDB")];
                    case 45:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `documentosEnviados` (`solicitud` int NOT NULL, `ineFront` tinyint(1) NULL DEFAULT '0', `ineBack` tinyint(1) NULL DEFAULT '0', `comprobanteDomicilio` tinyint(1) NULL DEFAULT '0', `comprobanteIngresos` tinyint(1) NULL DEFAULT '0', `selfie` tinyint(1) NULL DEFAULT '0', `activo` tinyint(1) NULL DEFAULT '1', UNIQUE INDEX `REL_6fc12687ce741c0115051b1712` (`solicitud`), PRIMARY KEY (`solicitud`)) ENGINE=InnoDB")];
                    case 46:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `SPEI` (`idSPEI` int NOT NULL AUTO_INCREMENT, `solicitud` int NOT NULL, `referencia` varchar(45) NOT NULL, `activo` tinyint NOT NULL DEFAULT '1', INDEX `spei_solicitudes_idx` (`solicitud`), PRIMARY KEY (`idSPEI`)) ENGINE=InnoDB")];
                    case 47:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `solicitudes` (`idSolicitud` int NOT NULL AUTO_INCREMENT, `comercio` int NOT NULL, `sucursal` int NOT NULL, `numeroPagos` int NOT NULL, `montoSolicitado` double NOT NULL, `montoPreAprobado` double NULL, `montoOtorgado` double NULL, `estadoSolicitud` int NOT NULL DEFAULT '1', `usuario` int NOT NULL, `quincenal` tinyint NOT NULL DEFAULT '0', `paraQuienProducto` int NOT NULL, `descripcion` tinytext NOT NULL, `usuarioEnTienda` tinyint NULL DEFAULT '0', `slackTimeStampOferta` varchar(20) NULL, `fechaCreacion` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `fechaUltimaActualizacionEstado` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `notasLlamada` text NULL, `slackTimeStampLlamada` varchar(20) NULL, `importanciaCiclismo` int NOT NULL, `prioridadVIP` tinyint NOT NULL DEFAULT '0', `idReporte` int NULL, `idFicoScore` int NULL, `matiAvailable` tinyint NOT NULL DEFAULT '0', INDEX `usuarioEnSolicitud_idx` (`usuario`), INDEX `sucursalesEnSolicitudes_idx` (`sucursal`), INDEX `ficoScoreEnSolicitud_idx` (`idFicoScore`), INDEX `estadoSolicitud_idx` (`estadoSolicitud`), INDEX `comercioEnSolicitudes_idx` (`comercio`), PRIMARY KEY (`idSolicitud`)) ENGINE=InnoDB")];
                    case 48:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `comentariosSolicitudes` (`idComentariosSolicitudes` int NOT NULL AUTO_INCREMENT, `solicitud` int NOT NULL, `idAdmin` int NULL, `comentario` text NOT NULL, INDEX `solicitud_idx` (`solicitud`), INDEX `comentariosSolicitudes_admins_idx` (`idAdmin`), PRIMARY KEY (`idComentariosSolicitudes`)) ENGINE=InnoDB")];
                    case 49:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `admins` (`idAdmin` int NOT NULL AUTO_INCREMENT, `nombre` varchar(45) NOT NULL, `apellido` varchar(45) NOT NULL, `username` varchar(45) NOT NULL, `password` varchar(200) NOT NULL, `fechaCreacion` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, UNIQUE INDEX `username_UNIQUE` (`username`), UNIQUE INDEX `IDX_4ba6d0c734d53f8e1b2e24b6c5` (`username`), PRIMARY KEY (`idAdmin`)) ENGINE=InnoDB")];
                    case 50:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoEstadoCivil` (`clave` varchar(2) NOT NULL, `descripcion` varchar(40) NOT NULL, PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 51:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoEstadoMexico` (`clave` varchar(5) NOT NULL, `descripcion` varchar(50) NOT NULL, PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 52:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoMoneda` (`clave` varchar(2) NOT NULL, `descripcion` varchar(20) NOT NULL, PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 53:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoResidencia` (`clave` int NOT NULL, `descripcion` text NOT NULL, PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 54:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoSexo` (`clave` varchar(1) NOT NULL, `descripcion` varchar(20) NOT NULL, PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 55:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoTipoAsentamiento` (`clave` int NOT NULL, `descripcion` varchar(50) NOT NULL, PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 56:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoTipoDomicilio` (`clave` varchar(1) NOT NULL, `descripcion` varchar(40) NOT NULL, PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 57:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `ccCatalogoTipoResponsabilidad` (`clave` varchar(1) NOT NULL, `descripcion` varchar(60) NOT NULL, PRIMARY KEY (`clave`)) ENGINE=InnoDB")];
                    case 58:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `credencialesComercios` (`idCredencialComercio` int NOT NULL AUTO_INCREMENT, `comercio` int NOT NULL, `username` varchar(45) NOT NULL, `password` varchar(200) NOT NULL, `fechaCreacion` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `activo` tinyint(1) NOT NULL DEFAULT '1', PRIMARY KEY (`idCredencialComercio`)) ENGINE=InnoDB")];
                    case 59:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `matiCatalogoErrores` (`idError` int NOT NULL AUTO_INCREMENT, `tipoDocumento` int NULL, `nombre` varchar(30) NULL, `descripcion` varchar(65) NULL, PRIMARY KEY (`idError`)) ENGINE=InnoDB")];
                    case 60:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `matiCatalogoStatus` (`idStatus` int NOT NULL AUTO_INCREMENT, `nombre` varchar(45) NULL, PRIMARY KEY (`idStatus`)) ENGINE=InnoDB")];
                    case 61:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `matiErrores` (`idError` int NOT NULL AUTO_INCREMENT, `idSolicitud` int NULL, `idMati` varchar(40) NULL, `tipoError` int NULL, PRIMARY KEY (`idError`)) ENGINE=InnoDB")];
                    case 62:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `matiUsuarios` (`id` int NOT NULL AUTO_INCREMENT, `idSolicitud` int NULL, `status` int NULL, `idMati` varchar(45) NULL, `idDashboardUrl` varchar(45) NULL, `domicilio` varchar(150) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 63:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `promesasPagos` (`idPromesa` int NOT NULL AUTO_INCREMENT, `solicitud` int NOT NULL, `nombre` varchar(45) NOT NULL, `correo` varchar(45) NOT NULL, `telefono` varchar(45) NOT NULL, `monto` double NULL, `fechaDePromesa` tinytext NOT NULL, `activo` tinyint NOT NULL DEFAULT '1', PRIMARY KEY (`idPromesa`)) ENGINE=InnoDB")];
                    case 64:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `smsEnviados` (`idMessage` varchar(38) NOT NULL, `fechaEnviado` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `destino` varchar(30) NOT NULL, `textoEnviado` varchar(200) NOT NULL, PRIMARY KEY (`idMessage`)) ENGINE=InnoDB")];
                    case 65:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `solicitudesCaducadas` (`idSolicitudCaducada` int NOT NULL AUTO_INCREMENT, `solicitud` int NOT NULL, `ultimoEstado` int NOT NULL, `fechaUltimaActualizacionEstado` datetime(0) NOT NULL, `fechaEnLaQueCaduco` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`idSolicitudCaducada`)) ENGINE=InnoDB")];
                    case 66:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticImportanciaCiclismo` (`idImportanciaCiclismo` int NOT NULL, `razonImportancia` varchar(45) NOT NULL, `activo` tinyint NOT NULL, PRIMARY KEY (`idImportanciaCiclismo`)) ENGINE=InnoDB")];
                    case 67:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticParaQuienProducto` (`idParaQuienProducto` int NOT NULL AUTO_INCREMENT, `paraQuienProducto` varchar(45) NOT NULL, `activo` tinyint NOT NULL DEFAULT '1', PRIMARY KEY (`idParaQuienProducto`)) ENGINE=InnoDB")];
                    case 68:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccCreditos` ADD CONSTRAINT `FK_c154eb3870a1ab41b8108ced5dd` FOREIGN KEY (`frecuenciaPagos`) REFERENCES `ccCatalogoFrecuenciaPago`(`clave`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 69:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccCreditos` ADD CONSTRAINT `FK_315069ec03576c2259bc7a8cacd` FOREIGN KEY (`clavePrevencion`) REFERENCES `ccCatalogoPrevencion`(`clave`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 70:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccCreditos` ADD CONSTRAINT `FK_f9bf41e07956e017f1444c6a9ce` FOREIGN KEY (`tipoCredito`) REFERENCES `ccCatalogoTipoCredito`(`clave`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 71:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccCreditos` ADD CONSTRAINT `FK_ffc5541409ab8f9bd536e40c699` FOREIGN KEY (`tipoCuenta`) REFERENCES `ccCatalogoTipoCuenta`(`clave`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 72:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccCreditos` ADD CONSTRAINT `FK_6fa15bce9e03a5f2252b49261c9` FOREIGN KEY (`idReporte`) REFERENCES `ccReportes`(`idReporte`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 73:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccConsultas` ADD CONSTRAINT `FK_cf48aa47e931d4b6c0621149921` FOREIGN KEY (`tipoCredito`) REFERENCES `ccCatalogoTipoCredito`(`clave`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 74:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccConsultas` ADD CONSTRAINT `FK_3797e93e355cde189301c6981f2` FOREIGN KEY (`idReporte`) REFERENCES `ccReportes`(`idReporte`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 75:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccDomicilios` ADD CONSTRAINT `FK_ed61388cd127382992e52f0c999` FOREIGN KEY (`idReporte`) REFERENCES `ccReportes`(`idReporte`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 76:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccEmpleos` ADD CONSTRAINT `FK_769231d44e03b59c4dc3357e96a` FOREIGN KEY (`idReporte`) REFERENCES `ccReportes`(`idReporte`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 77:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccMensajes` ADD CONSTRAINT `FK_40a9cbab46dd0d6ac92bc13c7c9` FOREIGN KEY (`idReporte`) REFERENCES `ccReportes`(`idReporte`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 78:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccPersonas` ADD CONSTRAINT `FK_2eaa9786466da19fa417e61647a` FOREIGN KEY (`idReporte`) REFERENCES `ccReportes`(`idReporte`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 79:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccRazonesFicoExpress` ADD CONSTRAINT `FK_f3b52c6d37325fa8516a836260c` FOREIGN KEY (`razon`) REFERENCES `ccCatalogoRazones`(`clave`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 80:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccRazonesFicoExpress` ADD CONSTRAINT `FK_6587f12da01f4a31c48ed02a80b` FOREIGN KEY (`idScore`) REFERENCES `ccScoresFicoExpress`(`idScore`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 81:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccScores` ADD CONSTRAINT `FK_b46b1ffc5500fda2516984486ed` FOREIGN KEY (`idReporte`) REFERENCES `ccReportes`(`idReporte`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 82:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccRazones` ADD CONSTRAINT `FK_a5c52e42ef9dd0a6381584faf98` FOREIGN KEY (`razon`) REFERENCES `ccCatalogoRazones`(`clave`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 83:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccRazones` ADD CONSTRAINT `FK_daa24d77afbc09f0b16d17db33f` FOREIGN KEY (`idReporte`) REFERENCES `ccReportes`(`idReporte`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 84:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccRazones` ADD CONSTRAINT `FK_da3af58ddc218f3a9bb7f848b19` FOREIGN KEY (`idScore`) REFERENCES `ccScores`(`idScore`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 85:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccReportes` ADD CONSTRAINT `FK_20d6674cda15333d7be8c3594f8` FOREIGN KEY (`idSolicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 86:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `numeroDePagosPorComercio` ADD CONSTRAINT `FK_6ae120848f223dba5d49ee0c989` FOREIGN KEY (`comercio`) REFERENCES `comercios`(`idComercio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 87:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `partners` ADD CONSTRAINT `FK_7c9e763ff47f23d81962b828609` FOREIGN KEY (`sucursal`) REFERENCES `sucursales`(`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 88:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` ADD CONSTRAINT `FK_d3da6404c5478e5bb6a54c43b9f` FOREIGN KEY (`comercio`) REFERENCES `comercios`(`idComercio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 89:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `variablesAlternativas` ADD CONSTRAINT `FK_c8edcaec4e07abe330ab80c4966` FOREIGN KEY (`idSolicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 90:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `opcionesDeOferta` ADD CONSTRAINT `FK_635d86c9b4bb2ab84f040570688` FOREIGN KEY (`tipoDePrestamo`) REFERENCES `staticTiposDePrestamos`(`idTipoDePrestamo`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 91:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_2e04d8756660683a03bf4a72006` FOREIGN KEY (`estadoCivil`) REFERENCES `staticEstadosCiviles`(`idEstadoCivil`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 92:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_2e0112cc0d65204cdc4aaae8bb5` FOREIGN KEY (`genero`) REFERENCES `staticGeneros`(`idGenero`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 93:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_b2754c29b38bc3b43cd6a2de2b4` FOREIGN KEY (`nivelEstudio`) REFERENCES `staticNivelesEstudios`(`idNivelEstudio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 94:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditos` ADD CONSTRAINT `FK_ff8afc3a9d910464fb08cb6c720` FOREIGN KEY (`tipoDePrestamo`) REFERENCES `staticTiposDePrestamos`(`idTipoDePrestamo`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 95:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditos` ADD CONSTRAINT `FK_9b5580337bf3d707b694f3e2ff2` FOREIGN KEY (`numeroContratoFirmado`) REFERENCES `documentosUsuarios`(`idDocs`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 96:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditos` ADD CONSTRAINT `FK_d770b5721a2d6c4aa8477556507` FOREIGN KEY (`estadoCredito`) REFERENCES `staticEstadosCreditos`(`idEstadoCredito`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 97:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditos` ADD CONSTRAINT `FK_f7a53e9510a744b17bba1ba6a93` FOREIGN KEY (`usuario`) REFERENCES `usuarios`(`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 98:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `documentosUsuarios` ADD CONSTRAINT `FK_c9e18a29e9f9a7fd07eaf1306d8` FOREIGN KEY (`idSolicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 99:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `documentosUsuarios` ADD CONSTRAINT `FK_53ef22d20e2fab668d0e113438a` FOREIGN KEY (`tipoDocumento`) REFERENCES `staticTiposDocumentos`(`idTipoDocumentos`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 100:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `firmas` ADD CONSTRAINT `FK_02f6ab403512c700fcece68c909` FOREIGN KEY (`idDoc`) REFERENCES `documentosUsuarios`(`idDocs`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 101:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `firmas` ADD CONSTRAINT `FK_138579724be68d031469c47dafe` FOREIGN KEY (`idSolicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 102:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `autenticacion` ADD CONSTRAINT `FK_5b813d9e4fd0f6f217ef323c154` FOREIGN KEY (`solicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 103:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` ADD CONSTRAINT `FK_6cc621104d09968b63a879bdfab` FOREIGN KEY (`fuenteIngresos`) REFERENCES `staticTiposIngresos`(`idTipoIngreso`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 104:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` ADD CONSTRAINT `FK_ad4fb6f6dca25926542d98def71` FOREIGN KEY (`solicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 105:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticMunicipios` ADD CONSTRAINT `FK_7fcae94354db2ce00285a87325c` FOREIGN KEY (`ciudad`) REFERENCES `staticCiudades`(`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 106:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticMunicipios` ADD CONSTRAINT `FK_b5c57e96bcfca63649029dddb5e` FOREIGN KEY (`estado`) REFERENCES `staticEstadosMexico`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 107:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticColonias` ADD CONSTRAINT `FK_54fdcb56464f82fc7353c75b887` FOREIGN KEY (`ciudad`) REFERENCES `staticCiudades`(`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 108:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticColonias` ADD CONSTRAINT `FK_17bf45385423d7562cb86f1515f` FOREIGN KEY (`codigoPostal`) REFERENCES `staticCodigosPostales`(`codigoPostal`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 109:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticColonias` ADD CONSTRAINT `FK_a4d8dd747035caec81bf6c4dd18` FOREIGN KEY (`estado`) REFERENCES `staticEstadosMexico`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 110:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticColonias` ADD CONSTRAINT `FK_36a939e94c26ad88b179d672e39` FOREIGN KEY (`municipio`) REFERENCES `staticMunicipios`(`idMunicipio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 111:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticCiudades` ADD CONSTRAINT `FK_224553d77ae184fb557e147b4fd` FOREIGN KEY (`estado`) REFERENCES `staticEstadosMexico`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 112:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticCodigosPostales` ADD CONSTRAINT `FK_a1c9259510d3fc101049f8223e0` FOREIGN KEY (`ciudad`) REFERENCES `staticCiudades`(`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 113:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticCodigosPostales` ADD CONSTRAINT `FK_3163746f675523f59e16891888c` FOREIGN KEY (`estadoMexico`) REFERENCES `staticEstadosMexico`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 114:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticCodigosPostales` ADD CONSTRAINT `FK_d10c7343be28a19bdd10351cce6` FOREIGN KEY (`municipio`) REFERENCES `staticMunicipios`(`idMunicipio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 115:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` ADD CONSTRAINT `FK_2cad38090ec9548b95f6f409943` FOREIGN KEY (`estado`) REFERENCES `staticEstadosMexico`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 116:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` ADD CONSTRAINT `FK_32675e0a2c3e7d110f677b65b9d` FOREIGN KEY (`solicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 117:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` ADD CONSTRAINT `FK_c15f34919f327c8617b68f03ef7` FOREIGN KEY (`tipoDomicilio`) REFERENCES `staticTiposDomicilios`(`idTipoDomicilio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 118:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `documentosRequeridos` ADD CONSTRAINT `FK_d026215adc1d35136b7d49cef8a` FOREIGN KEY (`solicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 119:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `oxxoPay` ADD CONSTRAINT `FK_62c69b21bd3eb88a1980901b7ca` FOREIGN KEY (`solicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 120:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `documentosEnviados` ADD CONSTRAINT `FK_6fc12687ce741c0115051b17122` FOREIGN KEY (`solicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 121:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `SPEI` ADD CONSTRAINT `FK_40f957e9d342d49eda519e8d302` FOREIGN KEY (`solicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 122:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_7fc049ae97cef89738b6b75c290` FOREIGN KEY (`comercio`) REFERENCES `comercios`(`idComercio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 123:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_4037929e39de69bb3226f376104` FOREIGN KEY (`estadoSolicitud`) REFERENCES `staticEstadosSolicitudes`(`idEstadoSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 124:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_e7e2414eb5c8bed92223439b9e4` FOREIGN KEY (`idFicoScore`) REFERENCES `ccScoresFicoExpress`(`idScore`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 125:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_4681377d397cbbd4060caa91fed` FOREIGN KEY (`sucursal`) REFERENCES `sucursales`(`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 126:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_3335ee30a8e7e47861f56214bc5` FOREIGN KEY (`usuario`) REFERENCES `usuarios`(`idUsuario`) ON DELETE RESTRICT ON UPDATE RESTRICT")];
                    case 127:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `comentariosSolicitudes` ADD CONSTRAINT `FK_9571aa7af7e927a8314e7a7b15d` FOREIGN KEY (`idAdmin`) REFERENCES `admins`(`idAdmin`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 128:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `comentariosSolicitudes` ADD CONSTRAINT `FK_b8b56abd847e06904a85d520e48` FOREIGN KEY (`solicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 129:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TablasV2Completas1597452569078.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `comentariosSolicitudes` DROP FOREIGN KEY `FK_b8b56abd847e06904a85d520e48`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `comentariosSolicitudes` DROP FOREIGN KEY `FK_9571aa7af7e927a8314e7a7b15d`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_3335ee30a8e7e47861f56214bc5`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_4681377d397cbbd4060caa91fed`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_e7e2414eb5c8bed92223439b9e4`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_4037929e39de69bb3226f376104`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_7fc049ae97cef89738b6b75c290`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `SPEI` DROP FOREIGN KEY `FK_40f957e9d342d49eda519e8d302`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `documentosEnviados` DROP FOREIGN KEY `FK_6fc12687ce741c0115051b17122`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `oxxoPay` DROP FOREIGN KEY `FK_62c69b21bd3eb88a1980901b7ca`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `documentosRequeridos` DROP FOREIGN KEY `FK_d026215adc1d35136b7d49cef8a`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` DROP FOREIGN KEY `FK_c15f34919f327c8617b68f03ef7`")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` DROP FOREIGN KEY `FK_32675e0a2c3e7d110f677b65b9d`")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` DROP FOREIGN KEY `FK_2cad38090ec9548b95f6f409943`")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticCodigosPostales` DROP FOREIGN KEY `FK_d10c7343be28a19bdd10351cce6`")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticCodigosPostales` DROP FOREIGN KEY `FK_3163746f675523f59e16891888c`")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticCodigosPostales` DROP FOREIGN KEY `FK_a1c9259510d3fc101049f8223e0`")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticCiudades` DROP FOREIGN KEY `FK_224553d77ae184fb557e147b4fd`")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticColonias` DROP FOREIGN KEY `FK_36a939e94c26ad88b179d672e39`")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticColonias` DROP FOREIGN KEY `FK_a4d8dd747035caec81bf6c4dd18`")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticColonias` DROP FOREIGN KEY `FK_17bf45385423d7562cb86f1515f`")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticColonias` DROP FOREIGN KEY `FK_54fdcb56464f82fc7353c75b887`")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticMunicipios` DROP FOREIGN KEY `FK_b5c57e96bcfca63649029dddb5e`")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticMunicipios` DROP FOREIGN KEY `FK_7fcae94354db2ce00285a87325c`")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` DROP FOREIGN KEY `FK_ad4fb6f6dca25926542d98def71`")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` DROP FOREIGN KEY `FK_6cc621104d09968b63a879bdfab`")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `autenticacion` DROP FOREIGN KEY `FK_5b813d9e4fd0f6f217ef323c154`")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `firmas` DROP FOREIGN KEY `FK_138579724be68d031469c47dafe`")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `firmas` DROP FOREIGN KEY `FK_02f6ab403512c700fcece68c909`")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `documentosUsuarios` DROP FOREIGN KEY `FK_53ef22d20e2fab668d0e113438a`")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `documentosUsuarios` DROP FOREIGN KEY `FK_c9e18a29e9f9a7fd07eaf1306d8`")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditos` DROP FOREIGN KEY `FK_f7a53e9510a744b17bba1ba6a93`")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditos` DROP FOREIGN KEY `FK_d770b5721a2d6c4aa8477556507`")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditos` DROP FOREIGN KEY `FK_9b5580337bf3d707b694f3e2ff2`")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditos` DROP FOREIGN KEY `FK_ff8afc3a9d910464fb08cb6c720`")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_b2754c29b38bc3b43cd6a2de2b4`")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_2e0112cc0d65204cdc4aaae8bb5`")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_2e04d8756660683a03bf4a72006`")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `opcionesDeOferta` DROP FOREIGN KEY `FK_635d86c9b4bb2ab84f040570688`")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `variablesAlternativas` DROP FOREIGN KEY `FK_c8edcaec4e07abe330ab80c4966`")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` DROP FOREIGN KEY `FK_d3da6404c5478e5bb6a54c43b9f`")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `partners` DROP FOREIGN KEY `FK_7c9e763ff47f23d81962b828609`")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `numeroDePagosPorComercio` DROP FOREIGN KEY `FK_6ae120848f223dba5d49ee0c989`")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccReportes` DROP FOREIGN KEY `FK_20d6674cda15333d7be8c3594f8`")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccRazones` DROP FOREIGN KEY `FK_da3af58ddc218f3a9bb7f848b19`")];
                    case 45:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccRazones` DROP FOREIGN KEY `FK_daa24d77afbc09f0b16d17db33f`")];
                    case 46:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccRazones` DROP FOREIGN KEY `FK_a5c52e42ef9dd0a6381584faf98`")];
                    case 47:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccScores` DROP FOREIGN KEY `FK_b46b1ffc5500fda2516984486ed`")];
                    case 48:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccRazonesFicoExpress` DROP FOREIGN KEY `FK_6587f12da01f4a31c48ed02a80b`")];
                    case 49:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccRazonesFicoExpress` DROP FOREIGN KEY `FK_f3b52c6d37325fa8516a836260c`")];
                    case 50:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccPersonas` DROP FOREIGN KEY `FK_2eaa9786466da19fa417e61647a`")];
                    case 51:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccMensajes` DROP FOREIGN KEY `FK_40a9cbab46dd0d6ac92bc13c7c9`")];
                    case 52:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccEmpleos` DROP FOREIGN KEY `FK_769231d44e03b59c4dc3357e96a`")];
                    case 53:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccDomicilios` DROP FOREIGN KEY `FK_ed61388cd127382992e52f0c999`")];
                    case 54:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccConsultas` DROP FOREIGN KEY `FK_3797e93e355cde189301c6981f2`")];
                    case 55:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccConsultas` DROP FOREIGN KEY `FK_cf48aa47e931d4b6c0621149921`")];
                    case 56:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccCreditos` DROP FOREIGN KEY `FK_6fa15bce9e03a5f2252b49261c9`")];
                    case 57:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccCreditos` DROP FOREIGN KEY `FK_ffc5541409ab8f9bd536e40c699`")];
                    case 58:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccCreditos` DROP FOREIGN KEY `FK_f9bf41e07956e017f1444c6a9ce`")];
                    case 59:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccCreditos` DROP FOREIGN KEY `FK_315069ec03576c2259bc7a8cacd`")];
                    case 60:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `ccCreditos` DROP FOREIGN KEY `FK_c154eb3870a1ab41b8108ced5dd`")];
                    case 61:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticParaQuienProducto`")];
                    case 62:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticImportanciaCiclismo`")];
                    case 63:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `solicitudesCaducadas`")];
                    case 64:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `smsEnviados`")];
                    case 65:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `promesasPagos`")];
                    case 66:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `matiUsuarios`")];
                    case 67:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `matiErrores`")];
                    case 68:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `matiCatalogoStatus`")];
                    case 69:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `matiCatalogoErrores`")];
                    case 70:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `credencialesComercios`")];
                    case 71:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoTipoResponsabilidad`")];
                    case 72:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoTipoDomicilio`")];
                    case 73:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoTipoAsentamiento`")];
                    case 74:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoSexo`")];
                    case 75:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoResidencia`")];
                    case 76:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoMoneda`")];
                    case 77:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoEstadoMexico`")];
                    case 78:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoEstadoCivil`")];
                    case 79:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_4ba6d0c734d53f8e1b2e24b6c5` ON `admins`")];
                    case 80:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `username_UNIQUE` ON `admins`")];
                    case 81:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `admins`")];
                    case 82:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `comentariosSolicitudes_admins_idx` ON `comentariosSolicitudes`")];
                    case 83:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `solicitud_idx` ON `comentariosSolicitudes`")];
                    case 84:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `comentariosSolicitudes`")];
                    case 85:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `comercioEnSolicitudes_idx` ON `solicitudes`")];
                    case 86:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `estadoSolicitud_idx` ON `solicitudes`")];
                    case 87:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ficoScoreEnSolicitud_idx` ON `solicitudes`")];
                    case 88:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `sucursalesEnSolicitudes_idx` ON `solicitudes`")];
                    case 89:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `usuarioEnSolicitud_idx` ON `solicitudes`")];
                    case 90:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `solicitudes`")];
                    case 91:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `spei_solicitudes_idx` ON `SPEI`")];
                    case 92:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `SPEI`")];
                    case 93:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_6fc12687ce741c0115051b1712` ON `documentosEnviados`")];
                    case 94:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `documentosEnviados`")];
                    case 95:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `solicitudOxxoPay_idx` ON `oxxoPay`")];
                    case 96:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `oxxoPay`")];
                    case 97:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_d026215adc1d35136b7d49cef8` ON `documentosRequeridos`")];
                    case 98:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `documentosRequeridos`")];
                    case 99:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `estado_idx` ON `domicilios`")];
                    case 100:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `solicitudEnDomicilios_idx` ON `domicilios`")];
                    case 101:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `tipoDomicilio_idx` ON `domicilios`")];
                    case 102:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `domicilios`")];
                    case 103:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticTiposDomicilios`")];
                    case 104:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticEstadosMexico`")];
                    case 105:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `codigoPostal_ciudades_idx` ON `staticCodigosPostales`")];
                    case 106:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `codigoPostal_estadoMexico_idx` ON `staticCodigosPostales`")];
                    case 107:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `codigoPostal_municipios_idx` ON `staticCodigosPostales`")];
                    case 108:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `codigoPostal_UNIQUE` ON `staticCodigosPostales`")];
                    case 109:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticCodigosPostales`")];
                    case 110:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `staticCiudades_estadosMexico_idx` ON `staticCiudades`")];
                    case 111:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticCiudades`")];
                    case 112:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `colonias_ciudad_idx` ON `staticColonias`")];
                    case 113:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `colonias_codigosPostales_idx` ON `staticColonias`")];
                    case 114:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `colonias_estado_idx` ON `staticColonias`")];
                    case 115:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `colonias_municipio_idx` ON `staticColonias`")];
                    case 116:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticColonias`")];
                    case 117:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `staticMunicipios_Ciudad_idx` ON `staticMunicipios`")];
                    case 118:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `staticMunicipios_estadomexico_idx` ON `staticMunicipios`")];
                    case 119:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticMunicipios`")];
                    case 120:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `fuenteIngresos_idx` ON `datosFinancieros`")];
                    case 121:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `solicitudEnDatosFinancieros_idx` ON `datosFinancieros`")];
                    case 122:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `datosFinancieros`")];
                    case 123:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticTiposIngresos`")];
                    case 124:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_5b813d9e4fd0f6f217ef323c15` ON `autenticacion`")];
                    case 125:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `autenticacion`")];
                    case 126:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `idDocumentoEnFirmas_idx` ON `firmas`")];
                    case 127:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `idSolicitudEnFirmas_idx` ON `firmas`")];
                    case 128:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `firmas`")];
                    case 129:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `solicitudDocumento_idx` ON `documentosUsuarios`")];
                    case 130:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `tipoDocumentosDocs_idx` ON `documentosUsuarios`")];
                    case 131:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `documentosUsuarios`")];
                    case 132:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticTiposDocumentos`")];
                    case 133:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `creditos_tipoDePrestamo_idx` ON `creditos`")];
                    case 134:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `numeroDocumento_idx` ON `creditos`")];
                    case 135:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `staticEstadosCreditos_idx` ON `creditos`")];
                    case 136:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `usuarios_idx` ON `creditos`")];
                    case 137:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `creditos`")];
                    case 138:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `estadoCivil_idx` ON `usuarios`")];
                    case 139:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `genero_idx` ON `usuarios`")];
                    case 140:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `nivelEstudio_idx` ON `usuarios`")];
                    case 141:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `usuarios`")];
                    case 142:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticNivelesEstudios`")];
                    case 143:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticGeneros`")];
                    case 144:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticEstadosCiviles`")];
                    case 145:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticEstadosCreditos`")];
                    case 146:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticTiposDePrestamos`")];
                    case 147:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `opcionesDeOferta_tipoDePrestamo_idx` ON `opcionesDeOferta`")];
                    case 148:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `opcionesDeOferta`")];
                    case 149:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `idSolicitud_idx` ON `variablesAlternativas`")];
                    case 150:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `variablesAlternativas`")];
                    case 151:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticEstadosSolicitudes`")];
                    case 152:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_b43a455bfcbcb3c49cbd68f6df` ON `comercios`")];
                    case 153:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `nombre_UNIQUE` ON `comercios`")];
                    case 154:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `comercios`")];
                    case 155:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `sucursales_comercios_idx` ON `sucursales`")];
                    case 156:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `sucursales`")];
                    case 157:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `partner_idx` ON `partners`")];
                    case 158:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `partners`")];
                    case 159:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `comercio_idx` ON `numeroDePagosPorComercio`")];
                    case 160:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `numeroDePagosPorComercio`")];
                    case 161:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccConsulta_idSolicitud_idx` ON `ccReportes`")];
                    case 162:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccReportes`")];
                    case 163:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccRazones_ccCatalogoRazones_idx` ON `ccRazones`")];
                    case 164:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccRazones_ccReportes_idx` ON `ccRazones`")];
                    case 165:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccRazones_ccScores_idx` ON `ccRazones`")];
                    case 166:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccRazones`")];
                    case 167:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccScores_ccReportes_idx` ON `ccScores`")];
                    case 168:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccScores`")];
                    case 169:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `clave_UNIQUE` ON `ccCatalogoRazones`")];
                    case 170:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoRazones`")];
                    case 171:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccRazones_ccCatalogoRazones_idx` ON `ccRazonesFicoExpress`")];
                    case 172:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccRazones_ccScores_idx` ON `ccRazonesFicoExpress`")];
                    case 173:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccRazonesFicoExpress`")];
                    case 174:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccScoresFicoExpress`")];
                    case 175:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccPersona_ccConsultas_idx` ON `ccPersonas`")];
                    case 176:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccPersonas`")];
                    case 177:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccMensajes_ccReportes_idx` ON `ccMensajes`")];
                    case 178:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccMensajes`")];
                    case 179:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccEmpleos_ccReportes_idx` ON `ccEmpleos`")];
                    case 180:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccEmpleos`")];
                    case 181:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccDomicilios_ccReportes_idx` ON `ccDomicilios`")];
                    case 182:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccDomicilios`")];
                    case 183:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccConsultas_ccCatalogoTipoCredito_idx` ON `ccConsultas`")];
                    case 184:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccConsultas_ccCatalogoTipoCuenta_idx` ON `ccConsultas`")];
                    case 185:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccConsultas_ccReportes_idx` ON `ccConsultas`")];
                    case 186:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccConsultas`")];
                    case 187:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoTipoCredito`")];
                    case 188:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccCreditos_ccCatalogoFrecuenciaPago_idx` ON `ccCreditos`")];
                    case 189:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccCreditos_ccCatalogoPrevencion_idx` ON `ccCreditos`")];
                    case 190:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccCreditos_ccCatalogoTipoCredito_idx` ON `ccCreditos`")];
                    case 191:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccCreditos_ccCatalogoTipoCuenta_idx` ON `ccCreditos`")];
                    case 192:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `ccCreditos_ccReportes_idx` ON `ccCreditos`")];
                    case 193:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCreditos`")];
                    case 194:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoTipoCuenta`")];
                    case 195:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoPrevencion`")];
                    case 196:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `ccCatalogoFrecuenciaPago`")];
                    case 197:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TablasV2Completas1597452569078;
}());
exports.TablasV2Completas1597452569078 = TablasV2Completas1597452569078;
//# sourceMappingURL=1597452569078-TablasV2Completas.js.map