import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
# from sales_rest.models import Something
from sales_rest.models import AutomobileVO

def get_automobiles():
    response = requests.get("http://inventory-api:8000/api/automobiles/")

    content = json.loads(response.content)
    try:
        for auto in content['autos']:
            AutomobileVO.objects.update_or_create(
                vin=auto["vin"],
                defaults={
                    "vin": auto["vin"],
                    "color": auto["color"],
                    "year": auto["year"],
                }

                )
    except Exception as e:
        print(e)



def poll():
    while True:
        print('Sales poller polling for data')
        try:
            # Write your polling logic, here
            get_automobiles()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(5)


if __name__ == "__main__":
    poll()
