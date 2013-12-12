test:
	npm config set utilus.styl:whatToTest $(test) && \
	npm test && \
	npm config set utilus.styl:whatToTest '**'

.PHONY: test
