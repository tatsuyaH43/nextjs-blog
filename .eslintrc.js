module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    /* 🔧react (package: eslint-plugin-react) */
    /* https://github.com/jsx-eslint/eslint-plugin-react */
    'react/boolean-prop-naming': [
      'error',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      },
    ], // propsのbooleanはis|hasから始める
    // 'react/button-has-type': 'error', // button要素のデフォルトのtypeはsubmitのため、明示的なtypeを指定する。
    'react/default-props-match-prop-types': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/destructuring-assignment': ['error', 'always'], // 分割代入で統一
    'react/forbid-elements': [
      1,
      {
        forbid: ['img'], // img要素についてはNext.jsのImageコンポーネントが使わせる
      },
    ],
    'react/forbid-prop-types': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function', // arrow関数で統一
      },
    ],
    'react/hook-use-state': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
    'react/iframe-missing-sandbox': ['error'], // iframe要素のsandbox属性必須（セキュリティ的に）。https://qiita.com/mzmz__02/items/f1187e86c175de5aec0b
    'react/jsx-boolean-value': 'error', // booleanの記述で省略できる箇所は省略
    'react/jsx-closing-bracket-location': 'error', // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-tag-location': 'error', // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/jsx-curly-brace-presence': [2, 'never'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-newline': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-spacing': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-equals-spacing': [2, 'never'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-fragments': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-handler-names': [
      'error',
      {
        // イベントの命名をルール化
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-no-bind': [
      'error',
      {
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-no-constructed-context-values': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    'react/jsx-no-useless-fragment': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    // 'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-pascal-case': ['error'],
    'react/jsx-props-no-multi-spaces': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-tag-spacing': [
      2,
      {
        beforeSelfClosing: 'always',
      },
    ],
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
      },
    ], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/no-access-state-in-setstate': 'error', // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-array-index-key': 'error', // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-multi-comp': 'error', // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-this-in-sfc': 'error', // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    // 'no-unstable-nested-components': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    'react/no-unused-prop-types': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-state': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/prefer-stateless-function': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/self-closing-comp': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/style-prop-object': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/void-dom-elements-no-children': ['error'], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md

    /* ✅typescript */
    '@typescript-eslint/no-inferrable-types': 'error', // 初期値で推測できるものは型宣言しない
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_', // 使われていない変数を禁止（引数の`_`始まりは許可）varsIgnorePatternで変数パターン設定可能
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'], // https://typescript-eslint.io/rules/no-use-before-define/
    '@typescript-eslint/array-type': 'warn', // https://typescript-eslint.io/rules/array-type
    '@typescript-eslint/no-for-in-array': 'error', // https://typescript-eslint.io/rules/no-for-in-array
    '@typescript-eslint/prefer-for-of': 'warn', // https://typescript-eslint.io/rules/prefer-for-of
    '@typescript-eslint/type-annotation-spacing': 'error', // https://typescript-eslint.io/rules/type-annotation-spacing/

    /* ✨style系 */
    // 'object-curly-newline': ['error', { consistent: true }],
    // 'function-paren-newline': ['error', { minItems: 3 }],
    'function-call-argument-newline': ['error', 'consistent'],
    'no-multi-spaces': 'error',
    'array-bracket-spacing': [2, 'never'], // 配列のカッコ内の間隔を強制
    'object-curly-spacing': ['error', 'always'], // 中括弧内のパディング
    'computed-property-spacing': ['error', 'never'], // 計算されたプロパティの内側のパディングの禁止
    'block-spacing': 2, // 単一行ブロックの内側のスペースを強制
    'brace-style': 2, // 関数などの波括弧の改行禁止
    camelcase: 2, // キャメル記法とアンダースコア記法でキャメル記法にする
    'comma-spacing': [
      // カンマの前後の間隔を強制
      2,
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [2, 'last'], // カンマスタイルを適用を強制
    'consistent-this': [2, 'self'], // 現在の実行コンテキストをキャプチャする際に一貫性のあるネーミングを強制
    'eol-last': 2, // ファイル末尾の改行必須
    // 名前関数（変数化）の強制
    'func-style': [
      'error',
      'expression',
      {
        allowArrowFunctions: true,
      },
    ],
    indent: [2, 2], // インデント
    'jsx-quotes': ['error', 'prefer-double'], // jsx上ではダブルクォート
    'no-lonely-if': 'error', // if分のelse強制 https://eslint.org/docs/latest/rules/no-lonely-if
    'no-mixed-spaces-and-tabs': 2, // インデントに混合スペースとタブを許可しない
    // 複数の空行を許可しない
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
      },
    ],
    'no-new-object': 2, // Objectコンストラクタの使用を許可しない
    'no-restricted-syntax': [2, 'WithStatement'], // コード内の特定の構文の使用を許可しない
    'no-trailing-spaces': 2, // 行の末尾の空白禁止
    // 'no-underscore-dangle': 2, // 識別子にアンダースコアをダングリングすることを禁止
    'no-unneeded-ternary': 'error', // 単純な選択肢が存在する場合に三元の演算子の使用を許可しない
    'operator-assignment': [2, 'always'], // 可能な場合は代入演算子の省略形とする
    // 'operator-linebreak': [2, 'none'], // 改行の後か前に位置させる操作を強制
    'padded-blocks': ['error', 'never'], // ブロック内のパディングを禁止
    'quote-props': [2, 'as-needed'], // 必要ないオブジェクトの文字列化を禁止
    quotes: ['error', 'single'], // JSなどではシングルクォート
    // 'require-jsdoc': 2 // Docのコメントを要求するかどうか ← 不必要な箇所まで強制してしまう
    'semi-spacing': 'error', // セミコロン周りの空白設定
    semi: ['error', 'always'], // セミコロンの使用を許可するか否か
    // 'sort-vars': 2, // 同じ変数宣言内のソート ← 可読性に影響がある
    // 特定のキーワードのスペース設定
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'space-before-blocks': 2, // ブロック前のスペースを許可しないかするか否か
    'space-before-function-paren': 'error', // 関数の引数カッコの前に空白を必要とするかどうか
    'space-in-parens': ['error', 'never'], // 括弧内のスペースを許可するか必要とするか。
    'space-infix-ops': 2, // 演算子の前後にスペースが必要です
    'space-unary-ops': 2, // 単項演算子の後/前にスペースを許可しない
    // 'spaced-comment': ['error', 'always'], // https://eslint.org/docs/latest/rules/spaced-comment
    // 'wrap-regex': 2, // 正規表現の際に括弧を必要とする
    // https://eslint.org/docs/latest/rules/key-spacing
    'key-spacing': [
      'error',
      {
        afterColon: true,
      },
    ],
    'arrow-spacing': 'error', // アロー関数の => の前後のスペースのスタイル
    'prettier/prettier': 'error',

    /* 🚫error系 */
    'comma-dangle': [
      // 最後のカンマ必要とするかどうか
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'no-console': 'error', // コンソールを禁止
    // 'no-extra-parens': ['error', 'all', { ignoreJSX: 'all' }], // 不必要な括弧を禁止
    'no-negated-in-lhs': 'error', // https://eslint.org/docs/latest/rules/no-negated-in-lhs
    'no-obj-calls': 2, // グローバルオブジェクトの関数呼び出しを許可しない
    'no-unreachable': 2, // returnやthrowされた等の後に書いてあるものを禁止
    // 'use-isnan': 2, // isNaNを使わないのを禁止
    // 'valid-jsdoc': 2, //JSDocのコメントが有効か確認
    // 'no-reserved-keys': 2, // 予約語をオブジェクトリテラルのキーとして使うことを禁止
    'no-unexpected-multiline': 2, // https://eslint.org/docs/latest/rules/no-unexpected-multiline
    'block-scoped-var': 2, // https://eslint.org/docs/latest/rules/block-scoped-var
    'consistent-return': 'error', // どの時点でも値を返さない場合があるからどちらか値を一方は返す、もしくは両方返す、の指定
    // curly: 'error', // すべての制御文の中括弧の規則を指定します
    'default-case': 'error', // switchステートメントのデフォルトケースを必要とする
    'dot-notation': 'error', // https://eslint.org/docs/latest/rules/dot-notation
    eqeqeq: ['error', 'always'], // https://eslint.org/docs/latest/rules/eqeqeq
    'guard-for-in': 'error', // https://eslint.org/docs/latest/rules/guard-for-in
    'no-alert': 'error', // https://eslint.org/docs/latest/rules/no-alert
    'no-caller': 'error', // https://eslint.org/docs/latest/rules/no-caller
    'no-div-regex': 'error', // https://eslint.org/docs/latest/rules/no-div-regex
    'no-else-return': 'error', // https://eslint.org/docs/latest/rules/no-else-return
    'no-labels': 'error', // https://eslint.org/docs/latest/rules/no-labels
    'no-eq-null': 'error', // https://eslint.org/docs/latest/rules/no-eq-null
    'no-eval': 'error', // eval非推奨なため必要
    'no-extend-native': 'error', // https://eslint.org/docs/latest/rules/no-extend-native
  },
};
