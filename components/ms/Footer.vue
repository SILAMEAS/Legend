<template>
  <footer class=" py-12">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Section -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold mb-6">Company</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                Cinemas
              </a>
            </li>
          </ul>
        </div>

        <!-- More Section -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold mb-6">More</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                Promotions
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                News & Activity
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                My Ticket
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy & Policy
              </a>
            </li>
          </ul>
        </div>

        <!-- Download App Section -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold mb-6">Download Our App</h3>
          <div class="flex space-x-4">
            <a
                href="#"
                class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                aria-label="Download on Google Play"
            >
              <PlayIcon class="w-6 h-6 text-white" />
            </a>
            <a
                href="#"
                class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                aria-label="Download on App Store"
            >
              <AppleIcon class="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        <!-- Social Media Section -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold mb-6">Follow Our Social Media</h3>
          <div class="flex flex-wrap gap-3">
            <a
                href="#"
                class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                aria-label="Follow us on Facebook"
            >
              <FacebookIcon class="w-5 h-5 text-white" />
            </a>
            <a
                href="#"
                class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                aria-label="Follow us on Instagram"
            >
              <InstagramIcon class="w-5 h-5 text-white" />
            </a>
            <a
                href="#"
                class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                aria-label="Follow us on YouTube"
            >
              <YoutubeIcon class="w-5 h-5 text-white" />
            </a>
            <a
                href="#"
                class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-colors duration-200"
                aria-label="Follow us on TikTok"
            >
              <TiktokIcon class="w-5 h-5 text-white" />
            </a>
            <a
                href="#"
                class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                aria-label="Follow us on Telegram"
            >
              <SendIcon class="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      <!-- Payment Methods -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div>
            <h4 class="text-lg font-semibold mb-4">Payment</h4>
            <div class="flex items-center space-x-6">
              <!-- ABA PayWay -->
              <div class="flex items-center space-x-2">
                <div class="bg-blue-600 px-3 py-1 rounded text-sm font-bold">ABA</div>
                <span class="text-blue-400 font-semibold">PAYWAY</span>
              </div>

              <!-- Visa -->
              <div class="bg-blue-600 px-4 py-2 rounded text-white font-bold text-lg">
                VISA
              </div>

              <!-- Mastercard -->
              <div class="flex items-center space-x-1">
                <div class="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
                <div class="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -ml-4"></div>
              </div>
            </div>
          </div>

          <!-- Copyright -->
          <div class="text-center lg:text-right">
            <p class="text-gray-400">All right reserved © 2023</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  PlayIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  SendIcon,
  AppleIcon
} from 'lucide-vue-next'

// Custom TikTok icon component since it's not in Lucide
const TiktokIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  `
}
</script>

<style scoped>
/* Additional custom styles if needed */
.hover\:bg-blue-600:hover {
  background-color: #2563eb;
}

.hover\:bg-pink-600:hover {
  background-color: #db2777;
}

.hover\:bg-red-600:hover {
  background-color: #dc2626;
}

.hover\:bg-blue-500:hover {
  background-color: #3b82f6;
}
</style>