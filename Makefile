dev-build:
	yarn webpack --mode development

dev-run: dev-build
	export FLASK_APP=run.py
	python -m flask run
