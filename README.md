# IE-blocker
Internet Explorer でアクセスすると、サイトをブロックします。

## Demo
[サンプル]()

## 使い方
HTMLファイルに以下のコードを貼り付けます。
```
<script>
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/msie/) || ua.match(/trident/)) {
      location.href = "ie.html";
    }
</script>
```

#### Optional
ユーザーがIE以外のブラウザを使っているときに、あなたのサイトにリダイレクトさせたい場合は、以下のコードを使ってください。
```
<script>
</script>
```
