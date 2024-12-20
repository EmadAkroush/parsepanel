<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<style>

html {
    direction: rtl;
    font-family: numregular;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #405FF2;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #405FF2;
}

@font-face {
  font-family: numregular;
  src: url(./public/font/Farsinumerals/Webfonts/Woff2/IRANSansXFaNum-Regular.woff2);
}

</style>
