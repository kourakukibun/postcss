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
- calcvwで使用するデザインサイズ（widthの値）はpostcss.config.jsに直指定なので要注意
