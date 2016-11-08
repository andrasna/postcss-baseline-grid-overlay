var postcss = require('postcss');

module.exports = postcss.plugin('postcss-baseline-grid-overlay', function () {

    return function (root) {
        root.walkDecls('baseline-grid-overlay', decl => {
            if (decl.value) {
                const selectorName = decl.parent.selector,
                    declValues = decl.value.match(/\S+\(.*\)|\S+/g),
                    baseline = declValues[0],
                    overlayColor = declValues[1] || 'rgba(0, 0, 0, .25)',
                    zIndex = declValues[2] || '9999';

                decl.parent.append({
                    prop: 'position',
                    value: 'relative'
                });

                root.insertAfter(decl.parent, `${selectorName}::after {
                    background: linear-gradient(to bottom, ${overlayColor}, ` +
                    `${overlayColor} 1px, transparent 1px, transparent);
                    background-size: 100% ${baseline};
                    bottom: 0;
                    content: "";
                    display: block;
                    left: 0;
                    position: absolute;
                    right: 0;
                    top: 0;
                    z-index: ${zIndex};
                }`);
            }

            decl.remove();
        });
    };
});
