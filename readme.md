# TsuyuPhotoGallery概要

### データの圧縮
https://tinyjpg.com/  
ここでの圧縮を忘れずに。

### 写真の更新方法
更新の際に触るフォルダは以下のふたつ。
- gallery -> 写真の詳細を記述
- public -> 写真データ
1. まずpublicディレクトリに写真を格納する。このディレクトリ内でのフォルダ名、ファイル名は任意に設定可能。
2. galleryディレクトに写真の詳細をmarkdownファイルで記述する。
#### 例）sunset1.jpgをsunsetカテゴリーの写真として更新
1. public/sunset/sunset1.jpgに写真データを格納
2. gallery/sunset-1.mdを以下のように記述
```md
---
title: 'テスト写真3'
category: 'sunset'
date: '2021-04-25'
spot: '東京'
photo: '/sunset/sunset1.jpg'
---
```
categoryをsunset(小文字)  
dateは任意設定で最新の日時の写真から順番に表示される  
photoはpublicディレクトリ内での相対パス  
title, spotは使用していないが今後の改修を考えてつけてある

### サイトデータの変更
変更できるのは以下のふたつ。
- サイトのタイトル
- カテゴリー
data/sitedata.js  
```js
export const categories = [
    {
        category: 'sunset',
        photo: '/category/sunset.jpg'
    },
    {
        category: 'culture',
        photo: '/category/culture.jpg'
    },
    {
        category: 'mountain',
        photo: '/category/mountain.jpg'
    },
    {
        category: 'nature',
        photo: '/category/nature.jpg'
    }
]

export const sitename = 'TsuyuPhotoGallery'

export const sitedescription = 'フォトギャラリー'

export const topphoto = '/gallery/fujisanto.jpg'
```
categoryを同形式で増減可能。category名を変えたらgallery/にある写真の詳細のカテゴリーも忘れずに変更のこと。  
photoはpublicディレクトリ内での相対パス。  
sitenameがサイトの名前。 
sitedescriptionはサイトの説明（google検索でサイト名の下に記述される） 
topphotoはトップの背景写真


# Nextjs README.md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
