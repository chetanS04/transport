import { HeroSectionData } from '@/common/interface';
import api from '@/lib/api';

export interface HeroSectionResponse {
    data: HeroSectionData[];
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

export const heroSectionService = {
    // Get all hero sections
    getAllHeroSections: async (params?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<HeroSectionResponse> => {
        const response = await api.get('/hero-section', { params });
        return response.data;
    },

    // Get single hero section by ID
    getHeroSectionById: async (id: number): Promise<{ data: HeroSectionData }> => {
        const response = await api.get(`/hero-section/${id}`);
        return response.data;
    },
};
