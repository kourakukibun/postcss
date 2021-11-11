# postcss

postcssでsassと似たような感覚で組めるようにしてみる！

## install

```
yarn install
```

## とりあえず全体的に動かす

```
yarn run all
```

## 個別：CSSコンパイル（監視付き）

```
yarn run compile:css
```

## 個別：CSS整形（監視付き）

```
yarn run watch:css
```

## 個別：BrowserSync

```
yarn run server
```

## 課題

納品先で修正することを考えて基本圧縮しないことを前提として

- 【とりあえず解決】出力後がちょっと残念→整形できるようにしたい→出力後に改めて整形を実行（cssが出力されたことを監視）
