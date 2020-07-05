import { IsString, MaxLength, MinLength, isEmpty, IsNumber, IsDate } from "class-validator";

export class ProdutoDto{

    id: number;

    @IsString({ message: 'Nome inválido!' })
    @MaxLength(100, { message: 'O nome deve ter no máximo 100 caracteres.' })
    name: string;

    @IsString({ message: 'CPF inválido!' })
    @MaxLength(500, { message: 'A Descrição deve ter 500 caracteres.' })
    descrition: string;

    @IsNumber()
    price: number;

    @IsNumber()
    stock: string;

    @IsDate()
    dateValidation: string;

    @IsString({ message: 'Unidade inválido!' })
    @MaxLength(2, { message: 'A Unidade de Medida deve ter no máximo 2 caracteres.' })
    unidadeMedida: string;

}
