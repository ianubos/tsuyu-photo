# サイトの構成・日程
### Tech Stacks
| FrontEnd | BackEnd | Server | VPS | DNS |
|:---------:|:------:|:-------:|:-------:|:-------:|
| Next.js | Node.js | Nginx | さくらVPS or AWS EC2 | Cloudflare |
| React SSG | コンタクトや支払いなど | ウェブサーバー | Hosting | DNS server |

### Samples
参考サイト  
Spectroplastという会社のサイトを参考に作ります。
- [Spectroplast](https://spectroplast.com/)

### Workflow
1. 参考サイトと同様のサイトを作成(写真・文章は後で差し替え)
2. 写真・文章素材に合わせてcssで微調整

### CSSについて
[Tailwindcss](https://tailwindcss.com/docs)というcss frameworkを使います。tailwindはcssファイルを用いずにhtmlのタグにクラスをつけることでcssを付与するため、ファイル＆フォルダ構造が簡潔になり、かつコードが読みやすくなります。  
もちろん、通常のcssのままでも使えます。ただしその場合はクラス名の混同を避けるために、module化して使います。  
[module化の例](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

### 役割分担について
obunai: フロントエンド・構成管理  
oue: フロントエンド・３Dモデル

### Branchの管理について
develop -> デフォルトのブランチ。基本的には別のブランチを作って、developブランチにmergeする形で作業を進めます。  
production -> 完成品のブランチ。developブランチが完成した後、productionブランチにmergeして、サーバーに反映します。  
その他のブランチ -> 基本的にはdevelopから派生させてブランチを作って作業します。  

### 日程・ミーティング
各ミーティングで次回までの詳細な進行を決定します。
| 第一回   | 第二回 | 第三回 | 第四回 | 第五回 |
|:---------:|:------:|:-------:|:-------:|:-------:|
|   6/8   |  6/14  |  6/21  |  6/28  |  7/5  |
| 概要、役割分担、初期設定 | ビジュアル作成 | ビジュアル作成 | アニメーション追加 | 修正 |

### サイト構成
- トップページ -> トップページ完成後に公開。その他のページは順次追加。
- サービス
- ニュース
- 会社概要
- コンタクト

### npm package
- [Scrollreveal](https://scrollrevealjs.org/) -> Next.jsで使えるか確認必須。使えない場合は他のライブラリを探します。
- [react-cool-dimensions](https://dev.to/wellyshen/introducing-react-cool-dimensions-react-hook-to-measure-an-element-s-size-and-handle-responsive-components-3m01) -> windowやオブジェクトのサイズ取得に使用。breakpointでの画像遷移などに便利。 

### その他導入検討
- reCAPTURE
- Stripe -> この場合Node.jsバックが必要



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
