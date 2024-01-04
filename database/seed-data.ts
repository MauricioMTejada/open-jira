
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
     entries: [
        {
            description: 'Pendiente: Primera línea de prueba',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En-Progreso: Segunda línea de prueba',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Terminadas: Tercera línea de prueba',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
     ]
}