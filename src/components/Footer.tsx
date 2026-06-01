import { Box, Container, Typography, Stack, IconButton, alpha } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { CRP_NUMBER, CLINIC_ADDRESS } from '../constants/links';

export const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.main',
        color: 'background.default', 
        py: { xs: 5, md: 6 }, 
        mt: 'auto',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} sx={{ alignItems: 'center', textAlign: 'center' }}>
          
          {/* LOGO */}
          <Box>
            <img 
              src="/logo3.png" 
              alt="Logo Giovana Guasque Frassetto" 
              style={{ 
                height: '60px',
                objectFit: 'contain',
                 filter: 'brightness(0) invert(1)'
              }} 
            />
          </Box>

          {/* REDES SOCIAIS */}
          <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
            <IconButton 
              href="https://www.instagram.com/psigiovanafrassetto" 
              target="_blank" 
              aria-label="Instagram"
              sx={{ 
                color: 'background.default', 
                bgcolor: alpha('#FFFFFF', 0.1), 
                transition: 'all 0.3s ease',
                '&:hover': { 
                  bgcolor: alpha('#FFFFFF', 0.25), 
                  transform: 'translateY(-3px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                } 
              }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton 
              href="https://www.linkedin.com/in/giovana-frassetto-425743291/" 
              target="_blank" 
              aria-label="LinkedIn"
              sx={{ 
                color: 'background.default', 
                bgcolor: alpha('#FFFFFF', 0.1), 
                transition: 'all 0.3s ease',
                '&:hover': { 
                  bgcolor: alpha('#FFFFFF', 0.25), 
                  transform: 'translateY(-3px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                } 
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>

          {/* INFORMAÇÕES DE CONTATO E REGISTRO */}
          <Stack spacing={0.5} sx={{ opacity: 0.85, mt: 2 }}>
            <Typography variant="caption" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500, fontSize: '0.85rem' }}>
              {CRP_NUMBER} | Atendimento Clínico Regulamentado
            </Typography>
            <Typography variant="caption" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500, fontSize: '0.85rem' }}>
              Endereço: {CLINIC_ADDRESS}
            </Typography>
          </Stack>

          <Box sx={{ pt: 2, mt: 1, borderTop: '1px solid', borderColor: alpha('#FFFFFF', 0.15), width: '100%', maxWidth: '350px' }}>
            <Typography variant="caption" sx={{ display: 'block', opacity: 0.6, fontFamily: '"Montserrat", sans-serif', fontSize: '0.75rem' }}>
              © {new Date().getFullYear()} Giovana Guasque Frassetto.
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', opacity: 0.6, fontFamily: '"Montserrat", sans-serif', fontSize: '0.75rem' }}>
              Todos os direitos reservados.
            </Typography>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
};