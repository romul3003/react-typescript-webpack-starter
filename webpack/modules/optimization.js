// Core
const TerserPlugin = require('terser-webpack-plugin')

/**
 * production — оптимизация включена только в mode: 'production'
 * development — оптимизация включена только в mode: 'development'
 * ✓ — оптимизация включена в mode: 'production' и в mode: 'development'
 */
exports.optimizeBuild = () => ({
  optimization: {
    nodeEnv: 'production',

    // dependency graph → компиляция
    // module graph → output
    // chunk graph → output

    // production: минификация JavaScript.
    minimize: true, // must be true on production
    minimizer: [new TerserPlugin()],

    // production: останавливает эмит сборки при возникновении ошибки во время компиляции.
    noEmitOnErrors: true,

    // ✓ Не добавляет в сборку пустые чанки — это уменьшает нагрузку на систему, что ускоряет ребилд.
    removeEmptyChunks: true,
    // ✓ Объединяет эквивалентные чанки.
    mergeDuplicateChunks: true,
    // ✓ Удаляет модуль из чанка, если этот модуль присутствует в родительском чанке (то есть уже доступен).
    removeAvailableModules: true,

    // production: анализирует module graph и пытается найти модули, которые можно смержить в один единый модуль.
    // ? эта настройка зависит от providedExports и usedExports.
    concatenateModules: true, // module concatenation, scope hoisting

    // ✓ определяет экспорированные сущности для каждого модуля.
    // Эта информация помогает остальным продвинутым оптимизациям вебпак.
    providedExports: true,
    // production: определяет использованные экспортированные сущности для каждого модуля.
    // Эта информация помогает остальным продвинутым оптимизациям вебпак.
    // Пример: минификаторы и DCE (dead code elimination) могут удалять неиспользованные экспорты из финальной сборки.
    // ? эта настройка зависит от providedExports
    usedExports: true,
    // production: собирает зависимость более эффективно, если в package.json зависимости стоит этот флаг.
    // ? эта настройка зависит от providedExports и usedExports
    sideEffects: true, // tree shaking

    // development: вместо числовых идентификаторов даёт модулям более понятные имена.
    // TODO webpack 5 add `moduleIds: "named"` default for development
    // TODO webpack 5 add `moduleIds: "size"` default for production
    // Определяет механизм генерирования идентификатора для модуля.
    // https://webpack.js.org/configuration/optimization/#optimization-moduleids
    // moduleIds: "size",

    // development: вместо числовых идентификаторов даёт чанкам более понятные имена.
    // TODO webpack 5 add `chunkIds: "named"` default for development
    // TODO webpack 5 add `chunkIds: "size"` default for production
    // Определяет механизм генерирования идентификатора для чанка.
    // https://webpack.js.org/configuration/optimization/#optimization-chunkids
    // chunkIds: "size",

    // initial chunk (vedors — react, react-dom)
    // async chunk (on demond)

    // Эта опция включена всегда. Когфигурируется в SplitChunksPlugin.
    splitChunks: {
      // Режим разделения кода. По-умолчанию — async.
      chunks: 'all', // initial, all (async + initial)
      // Минимальный размер нового чанка для отделения.
      minSize: 20000, // bytes
      // Максимальный размер нового чанка для отделения.
      // maxSize: 0,
      // Минимальное количество чанков, которые зависят от модуля
      // перед отделением этого модуля в отдельный чанк.
      minChunks: 1,
      // Максимальное количество одновременных параллельных запросов чанков для асинхронного сплит-поинта
      // (динамический импорт).
      // Всегда предпочитаются чанки большего размера.
      maxAsyncRequests: 5,
      // Максимальное количество одновременных параллельных запросов чанков на один entrypoint.
      // Всегда предпочитаются чанки большего размера.
      maxInitialRequests: 3,
      // Символ-разделитель имени сплит-чанка (напр. vendors~main.js).
      automaticNameDelimiter: '~',
      // Определяет имя нового чанка
      // name: true,
      // Мо-умолчанию cacheGroups наследует от остальных опций splitChunks ↑.
      // Уникальные для cacheGroups только test, priority и reuseExistingChunk.
      // Ключ каждой кеш-группы определяет её имя.
      // По-умолчанию вебпак устанавливает две кеш-группы:
      cacheGroups: {
        // Дефолтная кеш-группа. Выносит все зависимости из node_nodules в чанк vendors.
        defaultVendors: {
          // Выбирает модули, внесённые в данную кеш-группу. Если не указать будут выбраны все модули.
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
          reuseExistingChunk: true,
        },
        default: {
          // Дефолтная кеш-группа. Выносит любой модуль-зависимость в отдельный чанк default
          // при условии дублирования модуля-зависимости хотя-бы в двух чанках.
          minChunks: 2,
          // Приоритет кеш-группы. Если модуль попадает сразу в несколько кеш-групп, то выбирется
          // кеш-группа с более высоким priority, или которая составляет чанк большего размера.
          // У дефолтных кеш-групп отрицательный приоритет,
          // поэтому кастомные кеш-группы приоритетнее (их priority 0 по-умолчанию).
          priority: -20,
          // Если чанк содержит уже существующий отделённый чанк,
          // то используется этот уже существующий отделённый чанк вместо создания нового
          reuseExistingChunk: true,
        },
      },
    },
    // Выносит webpack runtime каждого entrypoint в отдельный чанк. false по-умолчанию.
    runtimeChunk: true,
  },
})

// exports.filterMomentLocales = () => ({
//     plugins: [ new ContextReplacementPlugin(/moment\/locale$/, /(en)/) ],
// })
