<template>
  <nav flex="~ gap-4" mt-6 justify-center text-xl>
    <RouterLink icon-btn to="/" title="Home">
      <div i-carbon:campsite />
    </RouterLink>

    <div icon-btn title="切换模式" @click="toggleDark()">
      <div i-carbon:sun dark:i-carbon:moon cursor="pointer" />
    </div>

    <RouterLink icon-btn to="/about" title="About">
      <div i-carbon:dicom-overlay />
    </RouterLink>

    <a icon-btn href="https://github.com/AnthonyJu/vitesse-plain" rel="noreferrer" target="_blank" title="GitHub">
      <div i-carbon:logo-github />
    </a>
  </nav>
</template>
