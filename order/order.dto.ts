import { IsString, MaxLength, MinLength, isEmpty, IsNumber, IsDate } from "class-validator";
import { Customer } from "src/customer/customer.entity";
import { Type } from "class-transformer";

export class OrderDto{

    id: number;

    @IsNumber()
    codigo: number;

    @IsDate()
    @Type(() => Date)
    dataDoPedido: Date;

    @IsDate()
    @Type(() => Date)
    dataEntregaPrevista: Date;

    @IsString()
    @MaxLength(100, {message: 'Transportadora deve ter no máximo 100 caracteres.'})
    transportadora: String;

    @IsNumber()
    valorTotal: number;

    @IsNumber()
    valorDoProdutos: number;

    @IsNumber()
    descontos: number;

    customer: Cliente;

    @IsString()
    @MaxLength(100, {message: 'Transportadora deve ter no máximo 100 caracteres.'})
    endereçoEntrega: String;

}
