# IE-blocker
Webページに Internet Explorer でアクセスされると、サイトをブロックできます。

## 使い方

HTMLファイルのHeadタグ内に以下のコードを貼り付けます。
`https://example.com` の部分は、IE以外のブラウザでアクセスされたときのリダイレクト先です。
あなたのサイトのURLに置き換えるか、省略してください。
```
<!-- Block IE -->
<script>
  if ( document.documentMode ) {
    location.href = 'https://psephopaiktes.github.io/IE-blocker/?https://example.com';
  }
</script>
```

もしくは、以下のようにjsファイルを読み込みます。
```
<script src="https://psephopaiktes.github.io/IE-blocker/index.js" defer></script>
```
