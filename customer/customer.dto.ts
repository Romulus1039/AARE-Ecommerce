mport { IsString, MaxLength, MinLength, isEmpty } from "class-validator";

export class CustomerDto{

    id: number;

    @IsString({ message: 'Nome inválido!' })
    @MaxLength(80, { message: 'O nome deve ter no máximo 80 caracteres.' })
    nome: string;

    @IsString({ message: 'CPF inválido!' })
    @MaxLength(11, { message: 'O CPF deve ter 11 caracteres.' })
    // @MinLength(11, { message: 'O campo CPF deve ter 11 caracteres.' })
    cpf: string;

    @IsString({ message: 'RG inválido!' })
    // @MinLength(9, { message: 'O campo RG deve ter 9 caracteres.' })
    @MaxLength(9, { message: 'O RG deve ter 9 caracteres.' })
    rg: string;

    @IsString({ message: 'Endereço inválido!' })
    @MaxLength(200, { message: 'O Endereço deve ter no máximo 200 caracteres.' })
    endereco: string;

    @IsString({ message: 'Bairro inválido!' })
    @MaxLength(200, { message: 'O campo Bairro deve ter no máximo 200 caracteres.' })
    bairro: string;

    @IsString({ message: 'Cidade inválido!' })
    @MaxLength(200, { message: 'A Cidade deve ter no máximo 200 caracteres.' })
    cidade: string;

    @IsString({ message: 'CEP válido!' })
    @MaxLength(200, { message: 'O Endereço deve ter no máximo 200 caracteres.' })
    cep: string;
}
