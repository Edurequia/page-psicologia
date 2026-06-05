import { Box, Container, Typography, Grid, Card, CardContent, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

export const Atendimento = () => {
  return (
    <Box id="atendimento" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'secondary.main' }}>
      <Container maxWidth="md">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <Typography variant="h2" align="center" sx={{ mb: 8, color: 'background.default', fontWeight: 800, fontSize: { xs: '2.2rem', md: '3.5rem' }, letterSpacing: '-1px' }}>
            Modalidades de Atendimento
          </Typography>
        </motion.div>
        
        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          
          {/* CARD: ATENDIMENTO ONLINE */}
          <Grid size={{xs: 12, sm: 6}}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.1 }} style={{ height: '100%' }}>
              <Card elevation={0} sx={{ borderRadius: '24px', p: 3, height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.default', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Box sx={(theme) => ({ p: 1.5, borderRadius: '16px', bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.main, display: 'inline-flex' })}>
                      <PhonelinkIcon fontSize="large" />
                    </Box>
                  </Box>
                  
                  <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: 800, color: 'primary.main', fontFamily: '"Montserrat", sans-serif' }}>
                    Atendimento Online
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontFamily: '"Montserrat", sans-serif', fontWeight: 500, lineHeight: 1.8, textAlign: 'center' }}>
                    Cuide de si no conforto e na segurança do seu próprio ambiente. Nossas sessões acontecem por videochamada de forma totalmente sigilosa, oferecendo maior flexibilidade de horários para se adaptar à sua rotina, permitindo que você seja atendido em qualquer lugar do Brasil ou do exterior.
                  </Typography>
                  
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* CARD: ATENDIMENTO PRESENCIAL */}
          <Grid size={{xs: 12, sm: 6}}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} style={{ height: '100%' }}>
              <Card elevation={0} sx={{ borderRadius: '24px', p: 3, height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.default', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                  {/* Container para centralizar o ícone */}
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Box sx={(theme) => ({ p: 1.5, borderRadius: '16px', bgcolor: alpha(theme.palette.secondary.main, 0.1), color: theme.palette.secondary.main, display: 'inline-flex' })}>
                      <LocationOnRoundedIcon fontSize="large" />
                    </Box>
                  </Box>
                  
                  <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: 800, color: 'secondary.main', fontFamily: '"Montserrat", sans-serif' }}>
                    Atendimento Presencial
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontFamily: '"Montserrat", sans-serif', fontWeight: 500, lineHeight: 1.8, textAlign: 'center' }}>
                    Um ambiente cuidadosamente planejado para que você se sinta acolhido. Uma estrutura dedicada a garantir a privacidade e a tranquilidade necessárias para o seu processo terapêutico.
                  </Typography>

                  <Typography variant="body1" align="left" sx={{ mt: 2, color: 'secondary.main', fontFamily: '"Montserrat", sans-serif', fontWeight: 700, lineHeight: 1.5 }}>
                    Av. Augusto Meyer, 40 - Auxiliadora <br /> Porto Alegre - RS.
                  </Typography>
                  
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};