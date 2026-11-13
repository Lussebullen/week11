# Sentry testing
- Task 1 done.  
- Task 2 done.
- Task 3 could not be tested since this Sentry setup (v.11+) does not use the deprecated **Sentry.setupExpressErrorHandler(app)**  
Note: The ordering problem exists in older SDK versions (v.8 - v.10), but v11 removed the need for the call, so position no longer applies. I did not remove it, but I have commented out that deprecated line of code in index.js (for completion reasons only)