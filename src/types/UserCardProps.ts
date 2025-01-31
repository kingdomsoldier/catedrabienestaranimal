export interface UserCardProps {  
    users: {  
        id: number; // Agregamos un id como clave única  
        avatar: string;   // URL de la imagen de usuario  
        name: string;     // Nombre del usuario  
        position: string; // Cargo del usuario  
        institution: string; // Institución del usuario  
        flagImage: string; // URL de la imagen de la bandera  
        country: string;  // País del usuario  
    }[];  
}