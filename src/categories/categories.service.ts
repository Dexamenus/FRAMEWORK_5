import { Injectable } from '@nestjs/common';
import { Category } from './entites/categories.entity.js';
import { CreateCategoriesDto } from './dto/create-categories-dto.js';
import { UpdateCategoriesDto } from './dto/update-categories-dto.js';

// Tipe ringan untuk in-memory store (tanpa relasi/timestamp)
type CategoryRecord = Pick<Category, 'id' | 'name'>;

@Injectable()
export class CategoriesService {
    private categories: CategoryRecord[] = [
        { id: '1', name: 'Fiksi' },
        { id: '2', name: 'Non-Fiksi' },
        { id: '3', name: 'Biografi' },
        { id: '4', name: 'Sejarah' },
        { id: '5', name: 'Sains' },
    ];

    // menampilkan seluruh data kategori
    findAll(): CategoryRecord[] {
        return this.categories;
    }

    // menyimpan data ke in-memory store
    create(inputCategory: CreateCategoriesDto): CategoryRecord {
        const newCategory: CategoryRecord = {
            id: String(this.categories.length + 1),
            name: inputCategory.name,
        };
        this.categories.push(newCategory);
        return newCategory;
    }

    // menampilkan data kategori berdasarkan ID
    findById(id: string): CategoryRecord | undefined {
        return this.categories.find(category => category.id === id);
    }

    // mengupdate data kategori berdasarkan ID
    update(id: string, updatedCategory: UpdateCategoriesDto): CategoryRecord | undefined {
        const categoryIndex = this.categories.findIndex(category => category.id === id);
        if (categoryIndex !== -1) {
            this.categories[categoryIndex] = { ...this.categories[categoryIndex], ...updatedCategory };
            return this.categories[categoryIndex];
        }
        return undefined;
    }

    // menghapus data kategori berdasarkan ID
    delete(id: string): boolean {
        const categoryIndex = this.categories.findIndex(category => category.id === id);
        if (categoryIndex !== -1) {
            this.categories.splice(categoryIndex, 1);
            return true;
        }
        return false;
    }
}
