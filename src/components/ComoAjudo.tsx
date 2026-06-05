import { Box, Container, Typography, Paper, Stack, alpha } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion, type Variants } from 'framer-motion';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import GroupsIcon from '@mui/icons-material/Groups';
import { theme } from '../theme';

const pillars = [
  { 
    icon: <SelfImprovementIcon sx={{ fontSize: 48 }} />, 
    title: <>Se entender <br /> de verdade</>, 
    desc: 'Aprofunde o autoconhecimento, compreenda seus padrões, valores e necessidades para fazer escolhas mais alinhadas à sua essência.'
  },
 { 
    icon: <Box component="img" src="/cerebro.png" alt="Coração" sx={{ width: 48, height: 48, objectFit: 'contain' }} />, 
    title: <>Cuidar da sua <br /> saúde mental</>, 
    desc: 'Aprenda a lidar com ansiedade, estresse, tristeza, autoestima, autocrítica e outras questões que impactam seu bem-estar emocional.' 
  },
  { 
    icon: <Box component="img" src="/coracao.png" alt="Desafios" sx={{ width: 48, height: 48, objectFit: 'contain' }} />, 
    title: <>Superar <br /> seus desafios</>, 
    desc: 'Elabore suas dores, ressignifique experiências e encontre novos caminhos para seguir em frente com mais leveza e confiança.' 
  },
  { 
    icon: <GroupsIcon sx={{ fontSize: 48 }} />, 
    title: <>Construir relações <br /> saudáveis</>, 
    desc: 'Melhore sua comunicação, estabeleça limites, fortaleça vínculos e viva relações mais autênticas e satisfatórias.' 
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

export const ComoAjudo = () => {
  return (
    <Box id="comoAjudo" sx={{ py: { xs: 10, md: 14 }, bgcolor: theme.palette.background.default, position: 'relative' }}>
      <Container maxWidth="lg">
        
        <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center", mb: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 700, 
                color: 'secondary.main', 
                textTransform: 'uppercase', 
                letterSpacing: 2, 
                mb: 2,
                lineHeight: 1.4
              }}
            >
              <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>
                Como a psicoterapia
              </Box>{' '}
              <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>
                pode te <span style={{ color: '#a05e45' }}>ajudar?</span>
              </Box>
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3.5rem' }, fontWeight: 800, color: 'text.primary', maxWidth: '800px', lineHeight: 1.1, mb: 3, letterSpacing: '-1px' }}>
             <span style={{ color:theme.palette.primary.main }}>Um espaço para você cuidar da sua mente e </span><span style={{ color: '#B45E45' }}>florescer.</span>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary', 
                maxWidth: { xs: '340px', md: '700px' },
                fontSize: { xs: '1.05rem', md: '1.15rem' }, 
                lineHeight: { xs: 1.65, md: 1.7 }, 
                mx: 'auto',
                textAlign: 'center'
              }}
            >
              Ofereço um lugar seguro e acolhedor para você olhar para dentro, compreender suas emoções e construir uma vida mais leve.
            </Typography>
          </motion.div>
        </Stack>

       <Box 
        component={motion.div} 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }}
        sx={{ mt: { xs: -3, md: 0 } }}
        >
            <Grid 
              container 
              spacing={{ xs: 3, md: 4 }} 
              sx={{ alignItems: 'stretch' }}
            >
              {pillars.map((pillar, idx) => {
                const isEven = idx % 2 === 0;
            
                return (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                    <motion.div variants={cardVariants} style={{ height: '100%' }}>
                      <Paper
                        elevation={0}
                        sx={(theme) => ({
                          p: 2, 
                          height: '100%',
                          minHeight: { xs: 300, md: 'auto' },
                          borderRadius: '24px', 
                          bgcolor: isEven ? theme.palette.primary.main : theme.palette.secondary.main,
                          border: '1px solid rgba(255,255,255,0.1)',
                          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)', 
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
                          display: 'flex',
                          flexDirection: 'column',
                          '&:hover': {
                            transform: 'translateY(-10px)',
                            borderColor: alpha('#FFFFFF', 0.4),
                            boxShadow: `0 20px 40px -10px rgba(0,0,0,0.25)`,
                          }
                        })}
                      >
                        <Box sx={{ mb: 4, p: 2, borderRadius: '16px', bgcolor: alpha('#FFFFFF', 0.15), color: theme.palette.background.default, display: 'inline-flex', alignSelf: 'center', transition: 'all 0.3s ease' }}>
                          {pillar.icon}
                        </Box>
                        
                        <Typography sx={{ fontWeight: 800, mb: 2, lineHeight: 1.3, color: 'background.default', fontSize: '1.2rem', textAlign: 'center' }}>
                          {pillar.title}
                        </Typography>
                        
                        <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.9), lineHeight: 1.7, fontSize: '1rem', textAlign: 'center' }}>
                          {pillar.desc}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
              );
            })}
        </Grid>
      </Box>

      </Container>
    </Box>
  );
};