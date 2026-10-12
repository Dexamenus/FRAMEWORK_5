import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateBooksDto {
    @IsNotEmpty({message: "Title is required"})
    @IsString({message: "Title must be a string"})
    readonly title: string;

    @IsNotEmpty({message: "Author is required"})
    @IsString({message: "Author must be a string"})
    readonly author: string;

    @IsNotEmpty({message: "ISBN is required"})
    readonly isbn: string;

    @IsInt({message: "Published year must be an integer"})
    @IsNotEmpty({message: "Published year is required"})
    readonly publishedYear: number;

}