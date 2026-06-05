import React, { useState } from 'react';
import { 
  Box, Container, Typography, Button, Stack, alpha, 
  IconButton, Drawer, List, ListItemText, ListItemButton 
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { keyframes } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { WHATSAPP_LINK } from '../constants/links';
import { motion, type Variants } from 'framer-motion';

const pulse = keyframes`
  0% { box-shadow: 0 6px 15px rgba(160, 94, 69, 0.4), 0 0 0 0 rgba(160, 94, 69, 0.8); }
  70% { box-shadow: 0 6px 15px rgba(160, 94, 69, 0.4), 0 0 0 25px rgba(160, 94, 69, 0); }
  100% { box-shadow: 0 6px 15px rgba(160, 94, 69, 0.4), 0 0 0 0 rgba(160, 94, 69, 0); }
`;

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  }
};

const springUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 15 } 
  }
};

const MENU_ITEMS = [
  { label: 'Sobre mim', id: 'sobre' },
  { label: 'Como vou te ajudar?', id: 'comoAjudo' },
  { label: 'Atendimento', id: 'atendimento' },
  { label: 'A clínica', id: 'fotosClinica' },
];

export const Inicio = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>, 
    targetId: string
  ) => {
    e.preventDefault();
    
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <Box 
      sx={{ 
        bgcolor: '#F8F1EC', /* Cor sólida como base de segurança */
        minHeight: { xs: '100vh', md: '800px' }, 
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflowX: 'hidden', 
        overflowY: { xs: 'visible', md: 'hidden' },
        width: '100%', /* Trava a largura para não gerar scroll horizontal */
        m: 0,
        p: 0
      }}
    >
      {/* HEADER */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: { xs: 16, md: 32 }, 
          left: 0, 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          zIndex: 10 
        }}
      >
        <Box 
          component={motion.div}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
          sx={() => {
            const paperColor = '#FFFFFF';

            return { 
              width: '90%', 
              maxWidth: '1000px',
              background: '#FFFFFF',
              '@media (min-width: 1400px)': { 
                background: `linear-gradient(135deg, ${alpha(paperColor, 0.4)} 0%, ${alpha(paperColor, 0.1)} 100%)` 
              },
              backdropFilter: 'blur(24px)', 
              WebkitBackdropFilter: 'blur(24px)',
              border: `1px solid ${alpha(paperColor, 0.5)}`,
              borderRadius: '100px', 
              px: { xs: 2, md: 3 }, 
              py: { xs: 1, md: 1 },
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.08), inset 0 0 0 1px ${alpha(paperColor, 0.3)}`
            };
          }}
        >
          <motion.img 
            whileHover={{ scale: 1.05 }}
            src="/logo3.png" 
            alt="Logo" 
            style={{ height: '30px', cursor: 'pointer' }} 
          />
          
          <Stack 
            direction="row" 
            spacing={1} 
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {MENU_ITEMS.map((item, idx) => (
              <Typography 
                key={idx} 
                component="a" 
                href={`#${item.id}`} 
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, item.id)}
                sx={(theme) => ({
                  display: 'flex',
                  alignItems: 'center',
                  lineHeight: 1,
                  whiteSpace: 'nowrap',
                  color: theme.palette.primary.main,
                  fontWeight: 600, 
                  fontSize: '0.95rem', 
                  textDecoration: 'none', 
                  px: { md: 1.5, lg: 2.5 },
                  py: 1, 
                  borderRadius: '50px', 
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: '#FFFFFF', 
                    bgcolor: theme.palette.primary.main 
                  } 
                })}
              >
                {item.label}
              </Typography>
            ))}
          </Stack>

          <Button 
            variant="contained" 
            href={WHATSAPP_LINK} 
            target="_blank"
            sx={(theme) => ({ 
              bgcolor: theme.palette.primary.main, 
              color: '#FFFFFF', 
              borderRadius: '50px', 
              px: { md: 2, lg: 3.5 },
              py: 1.2, 
              textTransform: 'none', 
              fontWeight: 800, 
              fontSize: '0.95rem',
              whiteSpace: 'nowrap',
              display: { xs: 'none', md: 'flex' }, /* ESCONDE ABAIXO DE 900PX */
              boxShadow: `0 4px 14px 0 ${alpha(theme.palette.primary.main, 0.3)}`,
              '&:hover': { 
                bgcolor: theme.palette.primary.dark, 
                transform: 'translateY(-2px)', 
                boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.5)}` 
              }, 
              transition: 'all 0.3s ease' 
            })}
          >
            <Box component="span" sx={{ display: { xs: 'none', md: 'inline', lg: 'none' } }}>
              Falar
            </Box>

            <Box component="span" sx={{ display: { xs: 'none', lg: 'inline' } }}>
              Falar agora
            </Box>
          </Button>

          <IconButton 
            onClick={handleDrawerToggle}
            sx={(theme) => ({ 
              display: { xs: 'flex', md: 'none' }, 
              color: theme.palette.primary.main 
            })}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {/* DRAWER MOBILE */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ 
          '& .MuiDrawer-paper': { 
            width: 250, 
            bgcolor: 'background.default', 
            p: 2 
          } 
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton 
            onClick={handleDrawerToggle} 
            sx={(theme) => ({ color: theme.palette.primary.main })}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>

        <List sx={{ pt: 0 }}>
          {MENU_ITEMS.map((item, index) => (
            <ListItemButton 
              key={index} 
              component="a" 
              href={`#${item.id}`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, item.id)}
              sx={(theme) => ({ 
                borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`, 
                py: 2 
              })}
            >
              <ListItemText 
                primary={
                  <Typography 
                    sx={(theme) => ({ 
                      fontSize: '1.1rem', 
                      fontWeight: 600, 
                      color: theme.palette.primary.main 
                    })}
                  >
                    {item.label}
                  </Typography>
                } 
              />
            </ListItemButton>
          ))}

          <Box sx={{ mt: 4 }}>
            <Button 
              fullWidth 
              variant="contained" 
              href={WHATSAPP_LINK} 
              target="_blank"
              sx={(theme) => ({ 
                bgcolor: theme.palette.secondary.main, 
                color: '#FFFFFF', 
                borderRadius: '50px', 
                py: 1.5, 
                fontSize: '1rem', 
                fontWeight: 'bold' 
              })}
            >
              Falar agora
            </Button>
          </Box>
        </List>
      </Drawer>

      {/* IMAGEM DE FUNDO */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        sx={{
          position: 'absolute',
          right: { xs: 0, md: '-5%' }, 
          top: { xs: 0, md: '-90px' }, 
          height: { xs: '52vh', md: '130%' }, 
          width: { xs: '100%', md: '55%' },
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 1
        }}
      >
        <Box 
          component="img"
          src="/emPe2.jpeg" 
          alt="Giovana Frassetto" 
          sx={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: { xs: 'center 15%', md: 'center 15%' } 
          }} 
        />
      </Box>

      {/* DEGRADÊ */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 2, 
          pointerEvents: 'none',
          background: {
            xs: `linear-gradient(to bottom, 
              transparent 0%,
              transparent 28%,
              rgba(248, 241, 236, 0.25) 36%,
              rgba(248, 241, 236, 0.65) 44%,
              #F8F1EC 50%,
              #F8F1EC 100%)`,
            md: `linear-gradient(to right, 
              #F8F1EC 0%, 
              #F8F1EC 58%,
              rgba(248, 241, 236, 0.8) 65%,
              rgba(248, 241, 236, 0.2) 72%,
              transparent 95%)`
          }
        }}
      />

      {/* CONTEÚDO PRINCIPAL */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 3, 
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: '52vh', md: '12vh' },
          pb: { xs: 8, md: 6 }
        }}
      >
        <Grid container spacing={{ xs: 0, md: 4 }} sx={{ flexGrow: 1 }}>
          <Grid 
            size={{ xs: 12, md: 6 }} 
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Box 
              component={motion.div} 
              variants={staggerContainer} 
              initial="hidden" 
              animate="visible"
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                flexGrow: 1 
              }}
            >
              <Box 
                sx={{ 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  px: { xs: 2, md: 0 }
                }}
              >
                <motion.div variants={springUp}>
                  <Typography 
                    variant="h1" 
                    sx={(theme) => ({ 
                      fontSize: { xs: 'clamp(1.9rem, 7.2vw, 2.35rem)', md: '4rem' }, 
                      color: theme.palette.primary.main, 
                      mb: { xs: 1.5, md: 3 }, 
                      lineHeight: 1.1, 
                      fontWeight: 800, 
                      letterSpacing: '-1px', 
                      textAlign: { xs: 'center', md: 'left' },
                      maxWidth: '100%', 
                      mx: { xs: 'auto', md: 0 },
                    })}
                  >
                    Cuidado psicológico com afeto e responsabilidade.
                  </Typography>
                </motion.div>
                
                <motion.div variants={springUp}>
                  <Typography 
                    variant="body1" 
                    sx={(theme) => ({ 
                      color: theme.palette.text.primary, 
                      fontWeight: 500, 
                      fontSize: { xs: 'clamp(0.95rem, 3.8vw, 1.15rem)', md: '1.25rem' },
                      maxWidth: { xs: '100%', md: '90%' }, 
                      mx: { xs: 'auto', md: 0 },
                      lineHeight: 1.5, 
                      textAlign: { xs: 'center', md: 'left' }
                    })}
                  >
                    Psicóloga clínica especializada em inteligência socioemocional, psicodiagnóstico, saúde mental e diversidade sexual e de gênero.
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={(theme) => ({ 
                      color: theme.palette.text.primary, 
                      fontWeight: 700,
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      mt: { xs: 1, md: 2 },
                      mb: { xs: 0, md: 0 }, 
                      maxWidth: { xs: '100%', md: '90%' }, 
                      textAlign: { xs: 'center', md: 'left' }
                    })}
                  >
                    Crianças, adolescentes e adultos.
                  </Typography>
                </motion.div>
              </Box>

              <Box 
                sx={{ 
                  mt: { xs: 4, md: 'auto' },
                  pt: { xs: 0, md: 4 }, 
                  pb: { xs: 'calc(64px + env(safe-area-inset-bottom))', md: 0 },
                  display: 'flex', 
                  justifyContent: { xs: 'center', md: 'flex-start' } 
                }}
              >
                <motion.div variants={springUp}>
                  <Button 
                    variant="contained" 
                    size="large" 
                    startIcon={<WhatsAppIcon />} 
                    href={WHATSAPP_LINK} 
                    target="_blank"
                    sx={(theme) => ({ 
                      fontSize: { xs: '1rem', md: '1.05rem' }, 
                      py: 1.5, 
                      px: 4, 
                      borderRadius: '50px', 
                      width: { xs: '100%', sm: 'auto' }, 
                      bgcolor: theme.palette.secondary.main,
                      color: '#FFFFFF',
                      animation: `${pulse} 2s infinite`, 
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        transform: 'scale(1.05)', 
                        bgcolor: theme.palette.secondary.dark, 
                        boxShadow: '0 12px 25px rgba(160, 94, 69, 0.6)' 
                      }
                    })}
                  >
                    Agendar Sessão
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </Grid>
          
          <Grid 
            size={{ xs: 12, md: 6 }} 
            sx={{ display: { xs: 'none', md: 'block' } }} 
          />
        </Grid>
      </Container>
    </Box>
  );
};