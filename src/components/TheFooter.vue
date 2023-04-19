<template>
  <nav flex="~ gap-4" mt-6 justify-center text-xl>
    <RouterLink icon-btn to="/" title="Home">
      <Iconify icon="carbon:campsite" />
    </RouterLink>

    <div icon-btn title="切换黑暗模式" @click="toggleDark()">
      <Iconify icon="carbon:sun" class="dark:hidden" />
      <Iconify icon="carbon:moon" class="hidden dark:block" />
    </div>

    <RouterLink icon-btn to="/about" title="About">
      <Iconify icon="carbon:dicom-overlay" />
    </RouterLink>

    <a icon-btn rel="noreferrer" href="https://github.com/AnthonyJu/vitesse-plain" target="_blank" title="GitHub">
      <Iconify icon="carbon:logo-github" />
    </a>
  </nav>
</template>
