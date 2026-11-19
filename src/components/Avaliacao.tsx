'use client';

import { Box, Container, Typography, Button, Stack, alpha } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion, type Variants } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { WHATSAPP_LINK } from '../constants/links';
import { theme } from '../theme';

const WHATSAPP_AVALIACAO = `${WHATSAPP_LINK}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a avaliação psicológica.')}`;

const indicacoes = [
  'Dificuldades de aprendizagem e atenção',
  'Investigação de TDAH e TEA',
  'Questões emocionais e comportamentais',
  'Dúvidas sobre o desenvolvimento infantil',
  'Orientação para tratamento, escola e família',
];

const etapas = [
  { titulo: 'Entrevista inicial', desc: 'Escuta da demanda e da história de vida. Com crianças e adolescentes, a família participa desse momento.' },
  { titulo: 'Testes e instrumentos', desc: 'Aplicação de testes psicológicos aprovados pelo CFP (SATEPSI), escolhidos de acordo com cada caso.' },
  { titulo: 'Devolutiva', desc: 'Encontro para explicar os resultados, com entrega do documento psicológico e orientações para os próximos passos.' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 15 } }
};

export const Avaliacao = () => {
  return (
    <Box id="avaliacao" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: 'center' }}>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'secondary.main', textTransform: 'uppercase', letterSpacing: 2, mb: 2, lineHeight: 1.4, textAlign: { xs: 'center', md: 'left' } }}>
                Para crianças, adolescentes e adultos
              </Typography>

              <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3.2rem' }, fontWeight: 800, lineHeight: 1.1, mb: 3, letterSpacing: '-1px', color: 'primary.main', textAlign: { xs: 'center', md: 'left' } }}>
                Avaliação psicológica: <span style={{ color: '#B45E45' }}>compreender para cuidar.</span>
              </Typography>

              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1.05rem', md: '1.15rem' }, mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
                A avaliação psicológica é um processo técnico e científico que investiga aspectos cognitivos, emocionais e comportamentais. Ela ajuda a entender melhor as dificuldades, apoia diagnósticos e orienta o tratamento, a escola e a família.
              </Typography>

              <Typography sx={{ fontWeight: 800, color: 'text.primary', mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                Quando pode ser indicada:
              </Typography>

              <Stack component="ul" spacing={1.5} sx={{ listStyle: 'none', p: 0, m: 0, mb: 5, mx: { xs: 'auto', md: 0 }, maxWidth: { xs: 380, md: 'none' } }}>
                {indicacoes.map((item) => (
                  <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: 'text.primary', fontWeight: 500 }}>
                    <CheckCircleOutlineIcon sx={{ color: 'primary.main', mt: '2px', flexShrink: 0 }} />
                    {item}
                  </Box>
                ))}
              </Stack>

              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  href={WHATSAPP_AVALIACAO}
                  target="_blank"
                  sx={{
                    bgcolor: 'secondary.main',
                    color: '#FFFFFF',
                    py: 1.5,
                    px: 4,
                    width: { xs: '100%', sm: 'auto' },
                    transition: 'all 0.3s ease',
                    '&:hover': { bgcolor: 'secondary.dark', transform: 'translateY(-2px)' }
                  }}
                >
                  Agendar avaliação
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box component={motion.ol} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
              {etapas.map((etapa, idx) => (
                <Box
                  component={motion.li}
                  variants={itemVariants}
                  key={etapa.titulo}
                  sx={{
                    display: 'flex',
                    gap: { xs: 2, sm: 3 },
                    p: { xs: 3, sm: 4 },
                    borderRadius: '24px',
                    bgcolor: idx % 2 === 0 ? 'primary.main' : 'secondary.main',
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
                  }}
                >
                  <Box sx={{ flexShrink: 0, width: 52, height: 52, borderRadius: '16px', bgcolor: alpha('#FFFFFF', 0.15), color: theme.palette.background.default, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic', fontWeight: 700, fontSize: '1.6rem' }}>
                    {idx + 1}
                  </Box>
                  <Box>
                    <Typography component="h3" sx={{ fontWeight: 800, color: 'background.default', fontSize: '1.2rem', mb: 0.5 }}>
                      {etapa.titulo}
                    </Typography>
                    <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.9), fontSize: '1rem', lineHeight: 1.7 }}>
                      {etapa.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};
