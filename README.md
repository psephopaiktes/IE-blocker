# IE-blocker
Internet Explorer でアクセスすると、サイトをブロックします。

## 使い方
HTMLファイルに以下のコードを貼り付けます。
```
<script>
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/msie/) || ua.match(/trident/)) {
      location.href = "https://psephopaiktes.github.io/IE-blocker/";
    }
</script>
```

ユーザーがIE以外のブラウザを使っているときに、あなたのサイトにリダイレクトさせたい場合は、以下のコードを使います。`https://yoursite.com`の部分をあなたのWebサイトのURLに置き換えてください。
```
<script>
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/msie/) || ua.match(/trident/)) {
      location.href = "https://psephopaiktes.github.io/IE-blocker/?https://yoursite.com";
    }
</script>
```
