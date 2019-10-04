import colors from "./Colors";
import images from "./Images";

export const changeRandomColor = mote => {
  let newColor = Object.values(
    colors[Math.floor(Math.random() * colors.length + 1)]
  )[0];
  console.log(newColor);

  document.documentElement.style.setProperty(
    `--color-${mote}`,
    newColor.primary
  );
  for (let i = 1; i <= 5; i++) {
    document.documentElement.style.setProperty(
      `--color-${mote}-light-${i}`,
      newColor[`light_${i}`]
    );
  }
  for (let i = 1; i <= 3; i++) {
    document.documentElement.style.setProperty(
      `--color-${mote}-dark-${i}`,
      newColor[`dark_${i}`]
    );
  }
};

export const changeRandomImage = mote => {
  let newImage = images[Math.floor(Math.random() * images.length + 1)];

  document.documentElement.style.setProperty(
    `--image-background-${mote}`,
    `url(https://picsum.photos/id/${newImage}/840/500)`
  );
};

export const changePoetImage = image => {
  document.documentElement.style.setProperty(
    `--image-poet-primary`,
    `url(${image})`
  );
};
