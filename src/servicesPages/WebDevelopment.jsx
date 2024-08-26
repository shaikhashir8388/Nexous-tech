import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Code } from '@mui/icons-material';
import { motion } from 'framer-motion';
import webdevImage from '../assets/webdev.png'; // Update the import path as per your project
import nextjsImage from '../assets/nextjs.png'; // Import Next.js logo

const WebDevelopment = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card elevation={0}>
              <CardMedia
                component="img"
                image={webdevImage} // Use the imported image
                alt="Web Development"
                className="w-full"
              />
            </Card>
          </motion.div>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" className="font-bold text-blue-600">
              <Code className="inline-block mr-2" />
              Web Development
            </Typography>
            <Typography className="text-gray-700 my-4">
              At Logic Tech, we specialize in building powerful, responsive, and user-friendly websites. Our expertise spans across modern frameworks and libraries like React, Vue.js, and Next.js, enabling us to create dynamic and interactive web experiences. Whether it's an e-commerce platform, a corporate website, or a custom web solution, we deliver exceptional quality tailored to your needs.
            </Typography>

            <Typography className="text-gray-700 my-4">
              Our approach to web development is centered around performance, scalability, and security. We integrate back-end technologies like Node.js, Express, and Django to ensure your website performs seamlessly, regardless of user load or complexity.
            </Typography>

            <Grid container spacing={2} className="my-4">
              {/* Icons representing technologies */}
              <Grid item xs={3}>
                <Card elevation={0}>
                  <CardMedia component="img" image="https://th.bing.com/th?id=OIP.Tpo0do4FnIyuhxRRUnFWjwHaHA&w=256&h=243&c=8&rs=1&qlt=90&o=6&cb=13&pid=3.1&rm=2" alt="React" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card elevation={0}>
                  <CardMedia component="img" image="src/assets/node.png" alt="Node.js" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card elevation={0}>
                  <CardMedia component="img" image="src/assets/vuejs.png" alt="Vue.js" className="w-12" />
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card elevation={0}>
                  <CardMedia component="img" image="src/assets/nextjs.png" alt="Next.js" className="w-12" />
                </Card>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WebDevelopment;
