# postcss

postcssでsassと似たような感覚で組めるようにしてみる！

## install

```
yarn install
```

## 各種コマンド

### とりあえず全体的に動かす

```
yarn run all
```

### 個別：CSSコンパイル（監視付き）

```
yarn run compile:css
```

### 個別：CSS整形（監視付き）

```
yarn run watch:css
```

### 個別：BrowserSync

```
yarn run server
```

## 整形対象外指定方法

.prettierignore に追記すればOK

## 課題・注意点

納品先で修正することを考えて基本圧縮しないことを前提として

- 【とりあえず解決】出力後がちょっと残念→整形できるようにしたい→出力後に改めて整形を実行（cssが出力されたことを監視）
- calcvwで使用するデフォルトのデザインサイズ（widthの値）はpostcss.config.jsに直指定なので要注意
- 引数があるmixinを使用する場合、特に引数を指定しない（デフォルト値で使用する）場合でもmixin名の後に「,」が必要っぽいので要注意
- 条件が使えない（それっぽいプラグインはあるけど…）ため三角表示のmixinの様に引数を用いて出し分ける、といったことができない。よって同様のmixinをケース分用意する必要がある。
- 計算系が若干弱い（sassみたいにどこでも利用できるわけではない）
- ファイルを追加すると処理が止まるので、その際は再度監視コマンドを実行する必要がある。
