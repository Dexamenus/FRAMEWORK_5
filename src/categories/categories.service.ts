import { Injectable } from '@nestjs/common';
import { Categories } from './entites/categories.entity.js';
import { CreateCategoriesDto } from './dto/create-categories-dto.js';
import { UpdateCategoriesDto } from './dto/update-categories-dto.js';

@Injectable()
export class CategoriesService {
    private categories: Categories[] = [
        { 
            id: 1, 
            name: 'Fiksi' 
        },
        { 
            id: 2, 
            name: 'Non-Fiksi' 
        },
        { 
            id: 3, 
            name: 'Biografi' 
        },
        { 
            id: 4, 
            name: 'Sejarah' 
        },
        { 
            id: 5, 
            name: 'Sains' 
        }
    ];
    // menampilkan seluruh data buku
        findAll(): Categories[] {
            return this.categories;
        }
        // menyimpan data ke database
        create(inputCategory: CreateCategoriesDto): Categories {
            const newCategory: Categories = {
                id: this.categories.length + 1,
                name: inputCategory.name
            };
            this.categories.push(newCategory);
            return newCategory;
        }
        // menampilkan data buku berdasarkan ID
        findById(id: number): Categories | undefined {
            return this.categories.find(category => category.id === id);
        }
        // mengupdate data buku berdasarkan ID
        update(id: number, updatedCategory: UpdateCategoriesDto): Categories | undefined {
            const categoryIndex = this.categories.findIndex(category => category.id === id);
            if (categoryIndex !== -1) {
                this.categories[categoryIndex] = { ...this.categories[categoryIndex], ...updatedCategory };
                return this.categories[categoryIndex];
            }
            return undefined;
        }
        // menghapus data buku berdasarkan ID
        delete(id: number): boolean {
            const categoryIndex = this.categories.findIndex(category => category.id === id);
            if (categoryIndex !== -1) {
                this.categories.splice(categoryIndex, 1);
                return true;
            }
            return false;
        }
}
