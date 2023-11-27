from django.db import models

class Note(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    
    def __str__(self):
            return self.title
    class Meta:
          db_table = "notes_notes"