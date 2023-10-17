### Notes

> I wasn't able to properly configure the GoogleMaps SDK as it requires an active billing account, and I faced some issues to create a new one (due to debit card verification issue with USD currency). I used another alternative using Leaflet inside a webview just for the sake of demonestration.

- In case you couldn't run the app on ios, make sure to set the min ios version to `13`.
- In case you're using Xcode V15 you might see the error below while building the app

```
std::unary_function<T, std::size_t> {};
      | ^ no template named 'unary_function' in namespace 'std'; did you mean '__unary_function'?
```

To resolve the above error, make sure to follow this issue to fix the error https://github.com/facebook/react-native/issues/37748#issuecomment-1580334650
