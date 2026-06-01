import { Box, Container, Typography, alpha } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

const PHOTOS = [
  { 
    id: 1, src: '/clinica1.jpeg', alt: 'Fachada ou Recepção', 
    size: { xs: 12, md: 8 }, 
    height: { xs: '250px', md: '550px' }, 
    position: 'center center'
  },
  { 
    id: 2, src: '/clinica2.jpeg', alt: 'Detalhe do Consultório', 
    size: { xs: 12, md: 4 }, 
    height: { xs: '250px', md: '550px' },
    position: 'center center' 
  },
  { 
    id: 3, src: '/salaEstar.jpeg', alt: 'Poltrona de atendimento', 
    size: { xs: 12, md: 4 }, 
    height: { xs: '250px', md: '350px' }, 
    position: 'center center' 
  },
  { 
    id: 4, src: '/salaEstar2.jpeg', alt: 'Decoração', 
    size: { xs: 12, md: 4 }, 
    height: { xs: '250px', md: '350px' }, 
    position: 'center center' 
  },
  { 
    id: 5, src: '/espacoKids.jpeg', alt: 'Outro ângulo do espaço', 
    size: { xs: 12, md: 4 }, 
    height: { xs: '250px', md: '350px' }, 
    position: 'center 75%'
  },
];

export const Espaco = () => {
  return (
    <Box id="fotosClinica" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: 'secondary.main' }}>
              Te espero aqui:
            </Typography>
          </motion.div>
        </Box>

        <Box 
          component={motion.div} 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
        >
          <Grid container spacing={2}>
            {PHOTOS.map((photo) => (
              <Grid size={photo.size} key={photo.id}>
                <motion.div variants={imageVariants} style={{ height: '100%' }}>
                  <Box 
                    sx={{ 
                      position: 'relative',
                      height: photo.height, 
                      width: '100%',
                      borderRadius: '24px', 
                      overflow: 'hidden',
                      boxShadow: '0 15px 35px -10px rgba(0,0,0,0.1)',
                      '&:hover .foto-clinica': {
                        transform: 'scale(1.05)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0, left: 0, width: '100%', height: '100%',
                        background: `linear-gradient(to bottom, transparent 70%, ${alpha('#000', 0.2)} 100%)`,
                        pointerEvents: 'none'
                      }
                    }}
                  >
                    <img 
                    className="foto-clinica"
                    src={photo.src} 
                    alt={photo.alt}
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        objectPosition: photo.position,
                        transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
                    }} 
                    />
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};