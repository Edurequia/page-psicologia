import { Box, Container, Typography, Button, alpha } from '@mui/material';
import Grid from '@mui/material/Grid';
import { WHATSAPP_LINK, CRP_NUMBER } from '../constants/links';
import { motion, type Variants } from 'framer-motion';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const textContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 15 } }
};

export const Sobre = () => {
  return (
    <Box id="sobre" sx={{ py: { xs: 12, md: 20 }, bgcolor: 'primary.main', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 8, md: 12 }} sx={{ alignItems: 'center' }}>
          
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'relative', width: '100%', maxWidth: '450px', margin: '0 auto' }}>
              
              <Box 
                component={motion.div}
                initial={{ opacity: 0, x: -40, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                sx={() => ({
                  position: 'absolute', top: 30, left: -30, width: '100%', height: '100%',
                  border: `2px solid ${alpha('#FFFFFF', 0.2)}`, // Borda clara
                  borderRadius: '32px', zIndex: 0
                })}
              />
              
              <Box 
                component={motion.div}
                initial={{ opacity: 0, x: 40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                sx={{
                  position: 'absolute', bottom: -20, right: -20, width: '70%', height: '70%',
                  bgcolor: 'secondary.main',
                  borderRadius: '32px', zIndex: 0
                }}
              />
              
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                src="/emPe3.jpeg" 
                alt="Giovana Frassetto" 
                style={{ 
                  width: '100%', borderRadius: '32px', position: 'relative', zIndex: 1,
                  objectFit: 'cover', aspectRatio: '3/4',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
                }} 
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={fadeUp}>
                <Typography variant="subtitle2" sx={() => ({ color: '#FFFFFF', letterSpacing: 3, textTransform: 'uppercase', mb: 2, fontWeight: 800, opacity: 0.8 })}>
                  Quem vai te guiar
                </Typography>
              </motion.div>
              
              <motion.div variants={fadeUp}>
                <Typography variant="h2" sx={() => ({ color: '#FFFFFF', mb: 1, fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-1px' })}>
                  Giovana Frassetto
                </Typography>
              </motion.div>
              
              <motion.div variants={fadeUp}>
                <Typography variant="h6" sx={() => ({ color: alpha('#FFFFFF', 0.8), fontWeight: 500, mb: 4, display: 'flex', alignItems: 'center', gap: 1 })}>
                  Psicóloga Clínica <span style={{ color: alpha('#FFFFFF', 0.3) }}>|</span> <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{CRP_NUMBER}</span>
                </Typography>
              </motion.div>
            
              <motion.div variants={fadeUp}>
                <Box sx={{ position: 'relative', pl: 3, borderLeft: '3px solid', borderColor: 'secondary.main', mb: 5 }}>
                  <Typography 
                  variant="body1" 
                  sx={(theme) => ({ 
                    color: theme.palette.background.default,
                    fontSize: { xs: '1rem', md: '1.15rem' }, 
                    lineHeight: 1.8, 
                    textAlign: 'justify',
                    fontFamily: '"Montserrat", sans-serif',
                    opacity: 0.9
                  })}
                >
                  Psicóloga clínica com atuação em psicoterapia de crianças, adolescentes e adultos, oferecendo um espaço de acolhimento, escuta e cuidado emocional. Trabalho com demandas emocionais, comportamentais e do neurodesenvolvimento, buscando compreender cada paciente de forma individualizada. Estou em constante aprimoramento em avaliação psicológica, psicodiagnóstico e instrumentos psicológicos, com olhar atento à saúde mental, inteligência socioemocional e diversidade sexual e de gênero.
                </Typography>
                </Box>
              </motion.div>
              
              <motion.div variants={fadeUp}>
                <Button 
                  variant="outlined" 
                  size="large" 
                  href={WHATSAPP_LINK} 
                  target="_blank"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={(theme) => ({ 
                    borderColor: theme.palette.background.paper,
                    color: theme.palette.background.paper,
                    borderWidth: '2px', fontSize: '1.05rem', py: 1.5, px: 4, borderRadius: '50px', fontWeight: 700,
                    fontFamily: '"Montserrat", sans-serif',
                    '&:hover': { 
                      borderWidth: '2px', 
                      transform: 'translateX(5px)', 
                      bgcolor: theme.palette.background.default,
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.background.default
                    },
                    transition: 'all 0.3s ease'
                  })}
                >
                  Agendar uma consulta
                </Button>
              </motion.div>
              
            </motion.div>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};