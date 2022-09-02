import {MigrationInterface, QueryRunner} from "typeorm";

export class LlenadoTablasStaticV31598632683842 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(`INSERT INTO tiposMovimientos(clave, descripcion) VALUES ('Cargo', 'Indica un cargo al crédito que debe ser cubierto por el cliente'),('Pago', 'Indica un pago del cliente para abonar al crédito o pagar cargos'),('Inicio prestamo', 'Refleja el monto otorgado como saldo insoluto en el historial de crédito'),('Corrección', 'Indica una corrección por parte de algún administrador directamente en el historial del crédito'),('Ajuste manual', 'Indica un movimiento que se realizó de manera manual');`);
            await queryRunner.query(`INSERT INTO formaPagos(clave, descripcion) VALUES ('OxxoPay', 'Pago en efectivo en OXXO'), ('Conekta-STP', 'Transferencia por Conekta-STP'), ('BBVA Practicaja', 'Pago en efectivo cajero BBVA'), ('BBVA Ventanilla', 'Pago en efectivo ventanilla BBVA'), ('BBVA SPEI', 'SPEI cuenta BBVA'), ('Banregio SPEI', 'SPEI cuenta Banregio'), ('Banregio Ventanilla', 'Pago en efectivo ventanilla Banregio'), ('Otro', '');`);
            await queryRunner.query(`INSERT INTO tiposTransacciones(clave, descripcion, tipoMovimientoId) VALUES ('Inicio préstamo', 'Transacción inicial', 3), ('Cargo parcialidad', 'Transaccion de cargo de una parcialidad segun los montos correspondientes',1), ('Pago a capital', 'Transacción de pago a capital',2), ('Pago de moratorios', 'Transacción de pago de intereses moratorios',2), ('Pago comisiones', 'Transacción de pago de comisiones',2), ('Pago de intereses', 'Transacción de pago de intereses ordinarios',2), ('Abono capital', 'Transacción de abono a capital para reducir saldo insoluto',2), ('Abono saldo a favor', 'Transacción de abono de saldo a favor',2), ('Retiro de saldo a favor', 'Transacción de retiro de saldo a favor',1), ('Comisiones por cierre', 'Transacción de comisiones por cierre',1), ('Migracion crédito', 'Transacción generada al migrar el crédito desde la V2',5), ('Cargo de moratorios', 'Transacción de cargo de intereses moratorios',5), ('Cargo de comisiones', 'Transacción de cargo de comisiones',5);`);
            await queryRunner.query(`INSERT INTO estatusParcialidades(clave, descripcion) VALUES ("Vigente", 'Indica que una parcialidad aun está vigente'), ("Vencido",'Indica que nua parcialidad se venció y está en atraso'), ('Pagado','Indica que una parcialidad ha sido cubierta en su totalidad');`);
            await queryRunner.query(`INSERT INTO tiposPrestamo(clave, descripcion) VALUES ('AtratoPago', 'Tipo de préstamo tradicional'), ('Efectivo', 'Tipo de préstamo en efectivo para clientes Atrato')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM tiposTransacciones;`)
        await queryRunner.query(`DELETE FROM DELETE FROM tiposMovimientos;`)
        await queryRunner.query(`DELETE FROM DELETE FROM tiposPrestamo;`)
        await queryRunner.query(`DELETE FROM estatusParcialidades;`)
        await queryRunner.query(`DELETE FROM formaPagos;`)
    }
}
