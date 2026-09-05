import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import{resolve} from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build:{
    rollupOptions:{
      input:{
        main:resolve(__dirname,'index.html'),
        about:resolve(__dirname,'about.html'),
        contact:resolve(__dirname,'contact.html'),
        register:resolve(__dirname,'register.html'),
        login:resolve(__dirname,'login.html'),
        cart:resolve(__dirname,'cart.html'),
        admin:resolve(__dirname,'admin.html'), 
      }
    }
  }
})