import api from '@/lib/api';

export interface HeroSectionData {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  rating?: number;
  customers_count?: string;
  button1_text?: string;
  button1_url?: string;
  button2_text?: string;
  button2_url?: string;
  image?: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

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
